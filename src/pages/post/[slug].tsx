/* eslint-disable react/no-danger */
/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from '../../../node_modules/next/head';

import { getPrismicClient } from '../../services/prismic';

import { formatPostProperties } from '../../utils/formatPostProperties';
import { PostBanner } from './components/PostBanner';
import { PostHeader } from './components/PostHeader';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Post | spacetraveling</title>
        </Head>

        <main className={styles.container}>
          <section className={styles.wrapper}>Carregando...</section>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling</title>
      </Head>

      <main className={styles.container}>
        <PostBanner post={post} />
        <section className={styles.wrapper}>
          <PostHeader post={post} />
          <section className={styles.content}>
            {post.data.content.map(({ heading, body }) => (
              <div key={heading} className={styles.block}>
                <h2>{heading}</h2>
                {body.map(({ text }) => (
                  <p key={text.slice(0, 10)}>{text}</p>
                ))}
                <div />
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType('posts', { pageSize: 100 });
  const slugs = posts.results.map(post => ({ params: { slug: post.uid } }));
  return {
    paths: slugs,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});
  const { slug } = params;
  const post = await prismic.getByUID('posts', String(slug), {});
  const postFormatted = formatPostProperties([post]);
  return {
    props: {
      post: postFormatted[0],
    },
    revalidate: 60 * 60,
  };
};
