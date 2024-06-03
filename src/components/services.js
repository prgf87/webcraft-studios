import React from 'react';
import {
  SiAntdesign,
  SiEsotericsoftware,
  SiWesterndigital,
} from 'react-icons/si';
import { IoPulseOutline } from 'react-icons/io5';

import { MdSupportAgent } from 'react-icons/md';
import Image from 'next/image';
import logo from '../../public/images/logo/logo-grayscale.png';

export default function Services() {
  return (
    <div className="max-w-screen mx-auto p-8 bg-gray-100 sm:text-center">
      <div id="services" className="relative top-[-100px]" />
      <div className="max-w-5xl mx-auto">
        <h2 className="pb-4 text-base">Our Services</h2>
        <div>
          <h2 className="text-4xl font-bold pb-2">
            Taking the Hassle out of the Process
          </h2>
          <p className="text-base pb-2">
            We help our customers to grow their business whilst maintaining a
            continuous relationship with their customers
          </p>
        </div>
        <div className="grid md:grid-cols-3 mx-auto gap-x-4">
          <div className="pt-8 flex flex-col">
            <div className="flex justify-center items-center">
              <SiAntdesign size={100} />
            </div>
            <h3 className="text-sm sm:text-lg font-bold pt-4 ">
              <span className="">Website Development</span>
            </h3>
            <p className="pt-4 text-sm  text-left">
              At Webcraft Studios, we specialize in custom website development,
              meticulously crafting each site to capture your company&apos;s
              essence and core values.
            </p>
            {/* <p className="pt-4 text-sm  text-left">
              Our process begins with an in-depth analysis of your target market
              and business objectives, ensuring that every design is both
              visually stunning and highly functional.
            </p>
            <p className="pt-4 text-sm  text-left">
              From simple informational websites to sophisticated platforms, we
              create user-friendly designs that not only attract but also engage
              your audience.
            </p>
            <p className="pt-4 text-sm  text-left">
              Our goal is to deliver a seamless online experience that drives
              growth and reflects your brand&apos;s unique identity.
            </p> */}
          </div>
          <div className="pt-8 flex flex-col">
            <div className="flex justify-center items-center">
              <SiEsotericsoftware size={100} />
            </div>
            <h3 className="text-sm sm:text-lg font-bold pt-4 ">
              <span className="">Software Design</span>
            </h3>
            <p className="pt-4 text-sm  text-left">
              Webcraft Studios offers bespoke development solutions tailored to
              your business needs, including web applications, e-commerce
              platforms, and content management systems (CMS).
            </p>
            {/* <p className="pt-4 text-sm  text-left">
              Our team of skilled experts leverages the latest programming
              languages and technologies to deliver high-quality, scalable, and
              secure web solutions.
            </p>
            <p className="pt-4 text-sm  text-left">
              We are committed to facilitating effective growth, ensuring that
              your digital tools are robust, efficient, and future-proof.
            </p>
            <p className="pt-4 text-sm  text-left">
              Whether you&apos;re launching a new online store or need a custom
              app, we provide the expertise to bring your vision to life.
            </p> */}
          </div>
          <div className="pt-8 flex flex-col">
            <div className="flex justify-center items-center">
              <MdSupportAgent size={100} />
            </div>
            <h3 className="text-sm sm:text-lg font-bold pt-4 ">
              <span className="">Continuous Support</span>
            </h3>
            <p className="pt-4 text-sm  text-left">
              Maintaining a dynamic and effective online presence requires
              ongoing attention and expertise. Our dedicated team provides
              continuous support to keep your website running smoothly and
              up-to-date.
            </p>
            {/* <p className="pt-4 text-sm  text-left">
              At Webcraft Studios, our dedicated team provides continuous
              support to keep your website running smoothly and up-to-date.
            </p>
            <p className="pt-4 text-sm  text-left">
              We blend creativity, professionalism, and an unwavering commitment
              to your success, ensuring that your site evolves with your
              business.
            </p>
            <p className="pt-4 text-sm  text-left">
              With our subscription model, you can focus on what you do best,
              leaving the website management to us.
            </p> */}
          </div>
          <div className="py-8 flex flex-col">
            <div className="flex justify-center items-center">
              <IoPulseOutline size={100} />
            </div>
            <h3 className="text-sm sm:text-lg font-bold pt-4 ">
              <span className="">Search Engine Optimisation</span>
            </h3>
            <p className="pt-4 text-sm  text-left">
              In today&apos;s competitive online landscape, visibility is key.
              Our comprehensive SEO services are designed to enhance your
              website&apos;s search engine ranking, driving organic traffic and
              increasing your online presence.
            </p>
            {/* <p className="pt-4 text-sm  text-left">
              We utilize proven strategies and the latest tools to optimize your
              site for search engines, ensuring that your target audience can
              easily find you.
            </p>
            <p className="pt-4 text-sm  text-left">
              From keyword research to content optimization and technical SEO,
              we cover all aspects to help your business stand out.
            </p>
            <p className="pt-4 text-sm  text-left">
              Let us help you achieve higher rankings and attract more visitors
              to your website.
            </p> */}
          </div>
          <div className="py-8 flex flex-col">
            <div className="flex justify-center items-center">
              <SiWesterndigital size={100} />
            </div>
            <h3 className="text-sm sm:text-lg font-bold pt-4 ">
              <span className="">Digital Marketing</span>
            </h3>
            <p className="pt-4 text-sm  text-left">
              Effective digital marketing is essential for reaching and engaging
              your audience. We offer a full suite of digital marketing
              services, including social media management, email marketing, and
              pay-per-click advertising.
            </p>
            {/* <p className="pt-4 text-sm  text-left">
              At Webcraft Studios, we offer a full suite of digital marketing
              services, including social media management, email marketing, and
              pay-per-click advertising.
            </p>
            <p className="pt-4 text-sm  text-left">
              Our data-driven approach ensures that your marketing efforts are
              targeted, measurable, and impactful.
            </p>

            <p className="pt-4 text-sm  text-left">
              We work closely with you to develop and execute strategies that
              align with your business goals, helping you to connect with your
              audience and drive conversions.
            </p> */}
          </div>
          <div className="py-8 flex flex-col">
            <div className="flex justify-center items-center">
              <Image src={logo} alt="logo b&w" height={92} width={92} />
            </div>
            <h3 className="text-sm sm:text-lg font-bold pt-4 ">
              <span className="">Branding</span>
            </h3>
            <p className="pt-4 text-sm  text-left">
              A strong brand identity is crucial for making a lasting
              impression. At Webcraft Studios, we help you create a cohesive and
              compelling brand that resonates with your audience.
            </p>
            {/*  <p className="pt-4 text-sm  text-left">
              Our branding services include logo design, visual identity, and
              brand strategy development.
            </p>
           <p className="pt-4 text-sm  text-left">
              We focus on creating a distinctive and memorable brand that
              reflects your values and sets you apart from the competition. With
              our expertise, your brand will not only look great but also
              communicate your message effectively.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
