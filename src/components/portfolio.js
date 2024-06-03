import Image from 'next/image';
import React from 'react';

import project1 from '../../public/images/projects/1.jpg';
import project2 from '../../public/images/projects/3.png';
import project3 from '../../public/images/projects/2.jpg';
import project4 from '../../public/images/projects/4.jpg';
import project5 from '../../public/images/projects/5.jpg';
import project6 from '../../public/images/projects/6.png';

export default function Portfolio() {
  return (
    <div className="max-w-screen mx-auto pt-10 sm:text-center">
      <div id="portfolio" className="relative top-[-100px]" />
      <div className="max-w-5xl mx-auto p-8">
        <h3 className="pb-4 text-4xl font-bold">Our Portfolio</h3>
        <div>
          <p className="text-base pb-2">
            Check out some of our recent projects and see how we&apos;ve helped
            our clients elevate their online presence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 mx-auto gap-x-4">
          <div className="py-8 flex flex-col flex-1">
            <h3 className="text-sm sm:text-lg font-bold">
              <span className="border-b border-[#7D1CBF] pb-1">
                Hailey Wilson Comms
              </span>
            </h3>
            <p className="py-4 text-sm flex-1">
              Portfolio and resource directory for an independent trader based
              in USA.
            </p>
            <Image
              src={project1}
              alt="pic1"
              className="shadow-md rounded-xl border"
            />
          </div>
          <div className="py-8 flex flex-col flex-1">
            <h3 className="text-sm sm:text-lg font-bold">
              <span className="border-b border-[#7D1CBF] pb-1">JobDone</span>
            </h3>
            <p className="py-4 text-sm flex-1">
              Similar to check-a-trade, this site connects clients with local
              traders by taking the hassle out of the process.
            </p>
            <Image
              src={project2}
              alt="pic2"
              className="shadow-md rounded-xl border"
            />
          </div>
          <div className="py-8 flex flex-col flex-1">
            <h3 className="text-sm sm:text-lg font-bold">
              <span className="border-b border-[#7D1CBF] pb-1">
                PurpleSoundCo
              </span>
            </h3>
            <p className="py-4 text-sm flex-1">
              SPA promoting this audio business with a view to collect
              information from potential customers.
            </p>
            <Image
              src={project3}
              alt="pic3"
              className="shadow-md rounded-xl border"
            />
          </div>
          <div className="py-8 flex flex-col flex-1">
            <h3 className="text-sm sm:text-lg font-bold">
              <span className="border-b border-[#7D1CBF] pb-1">AnaKnits</span>
            </h3>
            <p className="py-4 text-sm flex-1">
              Knitting e-commerce shop for speciality wools and accessories.
            </p>
            <Image
              src={project4}
              alt="pic3"
              className="shadow-md rounded-xl border"
            />
          </div>
          <div className="py-8 flex flex-col flex-1">
            <h3 className="text-sm sm:text-lg font-bold">
              <span className="border-b border-[#7D1CBF] pb-1">
                Sky Audio Mastering
              </span>
            </h3>
            <p className="py-4 text-sm flex-1">
              Personal portfolio website for a world reknown music producer and
              audio engineer.
            </p>
            <Image
              src={project5}
              alt="pic3"
              className="shadow-md rounded-xl border"
            />
          </div>
          <div className="py-8 flex flex-col flex-1">
            <h3 className="text-sm sm:text-lg font-bold">
              <span className="border-b border-[#7D1CBF] pb-1">
                Josh&apos;s Site
              </span>
            </h3>
            <p className="py-4 text-sm flex-1">
              Creative website using transitions and animations for a local
              developer.
            </p>
            <Image
              src={project6}
              alt="pic3"
              className="shadow-md rounded-xl border"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
