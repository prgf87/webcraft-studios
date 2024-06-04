import ContactForm from '@/components/contactForm';
import Layout from '@/components/layout';
import About from '@/components/about';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';

export default function Home() {
  return (
    <Layout>
      <div id="home" className="relative top-[-100px]" />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <ContactForm />
    </Layout>
  );
}
