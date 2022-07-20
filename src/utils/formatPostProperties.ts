interface Post {
  first_publication_date: string | null;
  uid: string;
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

export function formatPostProperties(posts: any[]): Post[] {
  return posts.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        banner: {
          url: post.data.banner.url,
        },
        author: post.data.author,
        content: post.data.content,
      },
    };
  });
}
