import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-sky-950 text-sky-100 flex flex-col w-full items-center min-h-screen p-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
