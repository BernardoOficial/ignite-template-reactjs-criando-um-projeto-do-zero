import styles from './styles.module.scss';

interface Post {
  data: {
    title: string;
    banner: {
      url: string;
    };
  };
}

interface PostBannerProps {
  post: Post;
}

export function PostBanner({ post }: PostBannerProps): JSX.Element {
  return (
    <figure className={styles.banner}>
      <img
        src={post.data.banner.url}
        alt={post.data.title}
        title={post.data.title}
        style={{ width: '100%', height: '400px' }}
      />
    </figure>
  );
}
