import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { formatDate } from '../../utils/formatDate';
import styles from './styles.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps): JSX.Element {
  return (
    <Link href={`/post/${post.uid}`}>
      <li className={styles.post}>
        <h2 className={styles.title}>{post.data.title}</h2>
        <p className={styles.description}>{post.data.subtitle}</p>
        <div className={styles.infos}>
          <div className={styles.createdAt}>
            <i className={styles.icon}>
              <FiCalendar />
            </i>
            <span className={styles.label}>
              {formatDate(post.first_publication_date)}
            </span>
          </div>
          <div className={styles.author}>
            <i className={styles.icon}>
              <FiUser />
            </i>
            <span className={styles.label}>{post.data.author}</span>
          </div>
        </div>
      </li>
    </Link>
  );
}
