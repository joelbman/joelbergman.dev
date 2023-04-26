import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="img/favicon.png" />
        <meta
          name="description"
          content="Personal portfolio page of Joel Bergman, a freelance web developer."
        />
        <meta name="keywords" content="Joel, Bergman, developer, web, software, freelancer" />
        <meta name="author" content="Joel Bergman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
