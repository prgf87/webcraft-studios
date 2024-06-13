import Contact from '@/components/contact';
import Layout from '@/components/layout';
import About from '@/components/about';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Hero2 from '@/components/hero2';

export default function Home() {
  return (
    <Layout>
      <div id="home" className="relative top-[-100px]" />
      <Hero />
      <Services />
      <Portfolio />
      <Hero2 />
      <About />
      <Contact />
    </Layout>
  );
}
