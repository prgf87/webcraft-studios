import Image from 'next/image';
import { Inter } from 'next/font/google';
import ContactForm from '@/components/ContactForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1>Hello World! </h1>
      <ContactForm />
    </main>
  );
}
