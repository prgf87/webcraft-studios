import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;

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
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  useEffect(() => {}, []);

  const onReCaptcha = (value) => {
    // console.log('Captcha value:', value);
    setStatus('submitting');
    try {
      fetch('/api/recaptcha', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('frontend response:', res);
          if (res.success) {
            setStatus('success');
          } else {
            setStatus('error');
            // setToastError();
          }
        });
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (name.length <= 0) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (subject.length <= 0) {
      errors.subject = 'Subject is required';
      valid = false;
    }

    if (email.length <= 0) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    if (message.length <= 0) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleInputChange = (field, value) => {
    const newErrors = { ...errors, [field]: '' };

    switch (field) {
      case 'name':
        if (value.length <= 0) newErrors.name = 'Name is required';
        break;
      case 'subject':
        if (value.length <= 0) newErrors.subject = 'Subject is required';
        break;
      case 'email':
        if (value.length <= 0) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value))
          newErrors.email = 'Email is invalid';
        break;
      case 'message':
        if (value.length <= 0) newErrors.message = 'Message is required';
        break;
      default:
        break;
    }

    setErrors(newErrors);

    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm() && status === 'success') {
      setStatus('submitting');
      const success = await sendEmailViaApi(name, email, subject, message);
      if (success) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({
          name: '',
          subject: '',
          email: '',
          message: '',
        });
        showToastMessage('Message sent successfully!');
        setStatus('sent');
      } else {
        showToastMessage('Failed to submit the form.');
        setStatus('idle');
      }
    }
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      {showToast && (
        <div
          className={`fixed bottom-8 right-8 bg-green-700 text-white p-3 rounded-md shadow-lg z-50 transition-opacity duration-500 ease-in-out ${
            showToast ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {toastMessage}
        </div>
      )}
      <form className="max-w-md mx-auto py-8 mb-5 z-0" onSubmit={handleSubmit}>
        <div id="contact" className="relative top-[-100px]" />
        <div className="mx-5 text-center flex flex-col mb-4 gap-2 justify-center items-center">
          <div className="text-sm p-1 rounded-lg">
            <h2 className="pt-4 text-base">Get in Touch</h2>
          </div>
          <h1 className="tracking-tighter text-3xl">
            Let&apos;s Discuss Your{' '}
            <span className="text-[#7D1CBF]">Project</span>
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
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md p-2`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md p-2`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
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
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className={`w-full border ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            } rounded-md p-2`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>

        <div className="">
          <label htmlFor="message" className="block mb-1 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`w-full border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-md p-2`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <ReCAPTCHA
          sitekey={siteKey}
          onChange={onReCaptcha}
          className="flex justify-center items-center sm:mt-0"
        />
        <button
          type="submit"
          className={`${
            status === 'idle' || status === 'submitting'
              ? 'btn-2-disabled mt-1'
              : 'btn-2 mt-1'
          }`}
          disabled={status === 'idle' || status === 'submitting'}
        >
          Submit
        </button>
        {status === 'success' && (
          <div className="flex justify-center items-center pt-8">
            <p>Message Sent</p>
          </div>
        )}
      </form>
    </div>
  );
}
