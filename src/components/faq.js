import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      title: 'What Services do we provide?',
      content: 'This is dummy text blah blah blah',
    },
    {
      title: 'How long does it take?',
      content: 'This is dummy text blah blah blah',
    },
    {
      title: 'How much does it cost?',
      content: 'This is dummy text blah blah blah',
    },
  ];

  const [openStates, setOpenStates] = useState(faqs.map(() => false));

  const toggleFAQ = (index) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <h1 className="text-4xl flex justify-center font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => {
        const isOpen = openStates[index];
        return (
          <div key={index} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full p-4 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.title}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
              <div className="p-4">{faq.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
