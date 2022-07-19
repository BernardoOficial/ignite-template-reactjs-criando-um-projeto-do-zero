import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicon/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon.png"
          />
          <link
            rel="mask-icon"
            href="/assets/favicon/favicon.png"
            color="#FF57B2"
          />
          <meta name="msapplication-TileColor" content="#FF57B2" />
          <meta name="theme-color" content="#1A1D23" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
