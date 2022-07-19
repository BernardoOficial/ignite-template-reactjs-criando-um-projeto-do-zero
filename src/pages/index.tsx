import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from '../../node_modules/next/head';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
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
  return (
    <>
      <Head>
        <title>Início | spacetraveling</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <h2 className={styles.title}>Como utilizar Hooks</h2>
              <p className={styles.description}>
                Pensando em sincronização em vez de ciclos de vida.
              </p>
              <div className={styles.infos}>
                <div className={styles.createdAt}>
                  <i className={styles.icon}>
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="created at"
                      width="20"
                      height="20"
                    />
                  </i>
                  <span className={styles.label}>15 Mar 2021</span>
                </div>
                <div className={styles.author}>
                  <i className={styles.icon}>
                    <Image
                      src="/assets/icons/user.svg"
                      alt="user"
                      width="20"
                      height="20"
                    />
                  </i>
                  <span className={styles.label}>Joseph Oliveira</span>
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <h2 className={styles.title}>Como utilizar Hooks</h2>
              <p className={styles.description}>
                Pensando em sincronização em vez de ciclos de vida.
              </p>
              <div className={styles.infos}>
                <div className={styles.createdAt}>
                  <i className={styles.icon}>
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="created at"
                      width="20"
                      height="20"
                    />
                  </i>
                  <span className={styles.label}>15 Mar 2021</span>
                </div>
                <div className={styles.author}>
                  <i className={styles.icon}>
                    <Image
                      src="/assets/icons/user.svg"
                      alt="user"
                      width="20"
                      height="20"
                    />
                  </i>
                  <span className={styles.label}>Joseph Oliveira</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);
//   // TODO
// };
