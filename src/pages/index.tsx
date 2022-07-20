import { PrismicDocument, Query } from '@prismicio/types';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import Head from '../../node_modules/next/head';
import { PostItem } from '../components/PostItem';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import { formatDate } from '../utils/formatDate';
import { formatPostsProperties } from '../utils/formatPostsProperties';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  const [results, setResults] = useState(postsPagination.results);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);

  async function handleClick(): Promise<void> {
    try {
      const response = await fetch(postsPagination.next_page);
      const data = (await response.json()) as Query<
        PrismicDocument<Record<string, any>, string, string>
      >;
      const newPosts = data.results;
      const postsFormatted = newPosts.map(post => ({
        uid: post.uid,
        first_publication_date: formatDate(post.first_publication_date),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
        },
      }));
      setResults(currentPosts => [...currentPosts, ...postsFormatted]);
      setNextPage(data.next_page);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return (
    <>
      <Head>
        <title>Início | spacetraveling</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {results.map(post => (
              <PostItem key={post.uid} post={post} />
            ))}
          </ul>
          {nextPage ? (
            <button
              type="button"
              className={styles['loading-posts']}
              onClick={handleClick}
            >
              Carregar mais posts
            </button>
          ) : null}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('posts', { pageSize: 2 });
  const postsFormatted = formatPostsProperties(postsResponse.results);
  return {
    props: {
      postsPagination: {
        results: postsFormatted,
        next_page: postsResponse.next_page,
      },
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
