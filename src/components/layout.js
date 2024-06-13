import Header from './header';
import Head from 'next/head';
import { Raleway } from 'next/font/google';
import { metadata } from './metadata';
import Footer from './footer';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon.url} />
      </Head>
      <Header />
      <main className={`${raleway.className} overflow-x-hidden`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
