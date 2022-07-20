interface Content {
  heading: string;
  body: {
    text: string;
  }[];
}

export function calculateReadingTime(content: Content[]): number {
  const wordsReadByHumanInMinute = 200;
  const quantityTheWords = content.reduce((acc, item) => {
    const heading = item.heading.trim().split(' ').length;
    const body = item.body.reduce((accumulator, { text }) => {
      return accumulator + text.trim().split(' ').length;
    }, 0);
    return acc + heading + body;
  }, 0);
  const reading_time = Math.ceil(quantityTheWords / wordsReadByHumanInMinute);
  return reading_time;
}
