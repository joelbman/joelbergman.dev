import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
