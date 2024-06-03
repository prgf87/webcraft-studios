import { Calligraffitti } from 'next/font/google';
import { useEffect, useState } from 'react';

async function sendEmailViaApi(name, email, subject, message) {
  try {
    const response = await fetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
  //   try {
  //     const res = await fetch('/api/route', {
  //       method: 'POST',
  //       body: JSON.stringify({ name, email, subject, message }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     console.log('response from sendemail function: ', res);
  //   } catch (e) {
  //     console.log('This is an error: ', e);
  //   }
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  //   useEffect(() => {
  //     console.log('CHANGED');
  //   }, [name, email, message, subject]);

  //   const handleValidation = (e) => {
  //     e.preventDefault();
  //     if (name.length <= 0) {
  //       setErrors((errors) => ({
  //         ...errors,
  //         name: 'Name is required',
  //       }));
  //     }
  //     if (subject.length <= 0) {
  //       errors.subject = 'Subject is required';
  //     }
  //     if (email.length <= 0) {
  //       errors.email = 'Email is required';
  //     } else if (!/\S+@\S+\.\S+/.test(email)) {
  //       errors.email = 'Email is invalid';
  //     }
  //     if (message.length <= 0) {
  //       errors.message = 'Message is required';
  //     }

  //     if (Object.keys(errors).length === 0) {
  //       console.log('Form submitted:', formData);
  //       setFormData({ name: '', email: '', message: '' });
  //     } else {
  //       setErrors(errors);
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmailViaApi(name, email, subject, message);
  };

  return (
    <form className="max-w-md mx-auto mt-5 mb-5" onSubmit={handleSubmit}>
      <div className="mx-5 text-center flex flex-col mb-4 gap-2 justify-center items-center">
        <div className="bg-gray-300 text-sm p-1 rounded-lg">
          <p>Get in Touch</p>
        </div>
        <h1 className="tracking-tighter text-3xl">
          Let&apos;s Discuss Your Project
        </h1>
        <p className="font-normal tracking-tight">
          Fill out the form below and one of our experts will be in touch to
          discuss your web design and development needs.
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 text-sm">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          //   onBlur={handleValidation}
          className={`w-full border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-md p-2`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-1 text-sm">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          //   onBlur={handleValidation}
          className={`w-full border ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          } rounded-md p-2`}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   onBlur={handleValidation}
          className={`w-full border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-md p-2`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1 text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          //   onBlur={handleValidation}
          className={`w-full border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } rounded-md p-2`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-black text-white px-2 py-1 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
