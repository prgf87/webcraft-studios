import Contact from '@/components/contact';
import Layout from '@/components/layout';
import Banner from '@/components/banner';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import About from '@/components/about';
import FAQ from '@/components/faq';
import ReviewsPage from '@/components/review';

export default function Home() {
  return (
    <Layout>
      <div id="home" className="relative top-[-100px]" />
      <Hero />
      <Services />
      <Portfolio />
      <FAQ />
      <ReviewsPage />
      <About />
      <Banner />
      <Contact />
    </Layout>
  );
}
