import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { calculateReadingTime } from '../../../../utils/calculateReadingTime';
import { formatDate } from '../../../../utils/formatDate';
import styles from './styles.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostHeaderProps {
  post: Post;
}

export function PostHeader({ post }: PostHeaderProps): JSX.Element {
  return (
    <section className={styles.header}>
      <h1 className={styles.title}>{post.data.title}</h1>
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
        <div className={styles.time}>
          <i className={styles.icon}>
            <FiClock />
          </i>
          <span className={styles.label}>
            {calculateReadingTime(post.data.content)} min
          </span>
        </div>
      </div>
    </section>
  );
}
