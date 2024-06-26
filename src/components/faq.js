import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      title: 'What Services do you provide?',
      content:
        'We offer a comprehensive range of web development services, including custom website design, e-commerce solutions, CMS integration, SEO optimization, website maintenance, and more. Our goal is to create high-quality, user-friendly websites tailored to your business needs.',
    },
    {
      title: 'How long does it take?',
      content:
        'The timeline for a web development project varies depending on the complexity and specific requirements of the project. On average, a standard website takes about 4-6 weeks from the initial consultation to the final launch. We provide a detailed timeline after understanding your project scope.',
    },
    {
      title: 'How much does it cost?',
      content:
        'The cost of a website depends on various factors such as the type of website, the number of pages, functionality requirements, and design complexity. We offer custom quotes based on your unique needs. Contact us for a detailed consultation and quote.',
    },
    {
      title: 'Do you offer after support?',
      content:
        'Yes, we provide ongoing support and maintenance services to ensure your website remains up-to-date, secure, and fully functional. Our support packages can be tailored to meet your specific needs, ensuring you have the help you need when you need it.',
    },
    {
      title: 'Can you manage my website for me?',
      content:
        'Absolutely! We offer website management services that include content updates, security monitoring, performance optimization, and more. Our goal is to let you focus on your business while we take care of your website.',
    },
    {
      title: 'I want to make a change, how can I do this?',
      content:
        'No problem at all! Just reach out to us with the details of what you want to change, and we&apos;ll handle it quickly. Whether it is a small tweak or a big update, we have got you covered.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto mt-5 mb-10 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="text-center">
        <h2 className="pt-4 mb-3">FAQ</h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h1>
      </div>

      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="max-w-2xl px-4 sm:px-8 md:px-16 lg:px-20">
            <button
              className="w-full mx-auto py-4 flex justify-between items-center focus:outline-none border-b border-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg font-medium text-left">
                {faq.title}
              </span>
              <svg
                className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isOpen ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className="py-2 text-lg leading-relaxed">{faq.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
