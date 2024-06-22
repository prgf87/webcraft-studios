// import Image from 'next/image';
// import React from 'react';
// import Link from 'next/link';

// import project1 from '../../public/images/projects/1.jpg';
// import project2 from '../../public/images/projects/3.png';
// import project3 from '../../public/images/projects/2.jpg';
// import project4 from '../../public/images/projects/4.jpg';
// import project5 from '../../public/images/projects/5.jpg';
// import project6 from '../../public/images/projects/6.png';

// export default function Portfolio() {
//   return (
//     <div className="max-w-screen mx-auto pt-10">
//       <div id="portfolio" className="relative top-[-100px]" />
//       <div className="max-w-5xl mx-auto p-8">
//         <h3 className="pb-4 text-4xl font-bold text-center">Our Portfolio</h3>
//         <div>
//           <p className="text-base pb-8 text-center">
//             Check out some of our recent projects and see how we&apos;ve helped
//             our clients elevate their online presence.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 mx-auto gap-4">
//           {/* <div className="flex flex-col flex-1 rounded overflow-hidden shadow-md">
//             <Image src={project1} alt="pic1" />
//             <div className="p-4">
//               <h3 className="text-sm sm:text-lg font-bold">
//                 <span className="portfolio-link">Hailey Wilson Comms</span>
//               </h3>
//               <p className="py-4 text-sm flex-1">
//                 Portfolio and resource directory for an independent trader based
//                 in USA.
//               </p>
//             </div>
//           </div> */}
//           {/* <div className="flex flex-col flex-1 border rounded overflow-hidden shadow-md">
//             <Image src={project2} alt="pic2" />
//             <div className="p-4">
//               <h3 className="text-sm sm:text-lg font-bold">
//                 <span className="portfolio-link">JobDone</span>
//               </h3>
//               <p className="py-4 text-sm flex-1">
//                 Similar to check-a-trade, this site connects clients with local
//                 traders by taking the hassle out of the process.
//               </p>
//             </div>
//           </div> */}
//           <div className="flex flex-col flex-1 border rounded overflow-hidden shadow-md">
//             <Image src={project3} alt="pic3" />
//             <div className="p-4">
//               <h3 className="text-sm sm:text-lg font-bold">
//                 <span className="portfolio-link">PurpleSoundCo</span>
//               </h3>
//               <p className="py-4 text-sm flex-1">
//                 SPA promoting this audio business with a view to collect
//                 information from potential customers.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 border rounded overflow-hidden shadow-md">
//             <Image src={project4} alt="pic3" />
//             <div className="p-4">
//               <h3 className="text-sm sm:text-lg font-bold">
//                 <span className="portfolio-link">AnaKnits</span>
//               </h3>
//               <p className="py-4 text-sm flex-1">
//                 Knitting e-commerce shop for speciality wools and accessories.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 border rounded overflow-hidden shadow-md">
//             <Image src={project5} alt="pic3" />
//             <div className="p-4">
//               <h3 className="text-sm sm:text-lg font-bold">
//                 <span className="portfolio-link">Sky Audio Mastering</span>
//               </h3>
//               <p className="py-4 text-sm flex-1">
//                 Personal portfolio website for a world reknown music producer
//                 and audio engineer.
//               </p>
//             </div>
//           </div>
//           {/* <div className="flex flex-col flex-1 border rounded overflow-hidden shadow-md">
//             <Image src={project6} alt="pic3" />
//             <div className="p-4">
//               <h3 className="text-sm sm:text-lg font-bold">
//                 <span className="portfolio-link">Josh&apos;s Site</span>
//               </h3>
//               <p className="py-4 text-sm flex-1">
//                 Creative website using transitions and animations for a local
//                 developer.
//               </p>
//             </div>
//           </div> */}
//         </div>
//         <div className="flex justify-center items-center pt-8 mx-auto">
//           <Link href={'/#about'}>
//             <button className="btn-3">Learn More</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import project1 from '../../public/images/projects/1.jpg';
import project2 from '../../public/images/projects/3.png';
import project3 from '../../public/images/projects/2.jpg';
import project4 from '../../public/images/projects/4.jpg';
import project5 from '../../public/images/projects/5.jpg';
import project6 from '../../public/images/projects/6.png';

const projects = [
  {
    image: project1,
    title: 'Hailey Wilson Comms',
    description:
      'Portfolio and resource directory for an independent trader based in USA.',
  },
  {
    image: project3,
    title: 'PurpleSoundCo',
    description:
      'SPA promoting this audio business with a view to collect information from potential customers.',
  },
  {
    image: project4,
    title: 'AnaKnits',
    description:
      'Knitting e-commerce shop for speciality wools and accessories.',
  },
  {
    image: project5,
    title: 'Sky Audio Mastering',
    description:
      'Personal portfolio website for a world renowned music producer and audio engineer.',
  },
  {
    image: project6,
    title: "Josh's Site",
    description:
      'Creative website using transitions and animations for a local developer.',
  },
];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  return (
    <div className="max-w-5xl mx-auto pt-10">
      <div id="portfolio" className="relative top-[-100px]" />
      <div className="max-w-5xl mx-auto p-8">
        <h3 className="pb-4 text-4xl font-bold text-center">Our Portfolio</h3>
        <div>
          <p className="text-base pb-8 text-center">
            Check out some of our recent projects and see how we&apos;ve helped
            our clients elevate their online presence.
          </p>
        </div>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="btn-5 absolute left-0 sm:left-12 lg:left-10 top-1/2 transform -translate-y-1/2 z-10"
          >
            &#10094;
          </button>
          <div className="flex items-center justify-center overflow-hidden relative z-0">
            <div className="max-w-5xl flex justify-center items-center -space-x-64 md:-space-x-[550px] lg:-space-x-[800px]">
              {projects.map((project, index) => {
                const isCurrent = index === current;
                const isPrev =
                  index === (current - 1 + projects.length) % projects.length;
                const isNext = index === (current + 1) % projects.length;

                let positionClasses =
                  'transition-all duration-500 ease-in-out transform';
                if (isCurrent) {
                  positionClasses += ' scale-100 z-20 opacity-100 blur-0';
                } else if (isPrev) {
                  positionClasses +=
                    ' scale-75 z-10 opacity-50 -translate-x-24 blur-md';
                } else if (isNext) {
                  positionClasses +=
                    ' scale-75 z-10 opacity-50 translate-x-24 blur-md';
                } else {
                  positionClasses += ' scale-50 z-0 opacity-0 blur-xl';
                }

                return (
                  <div
                    key={index}
                    className={`w-64 md:w-[550px] lg:w-[800px] min-h-80 pb-4 ${positionClasses}`}
                  >
                    <div className="flex flex-col flex-1 border rounded overflow-hidden shadow-md bg-white">
                      <Image
                        src={project.image}
                        alt={`pic${index + 1}`}
                        className="min-h-80 w-64 md:w-[550px] lg:w-[800px] object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-base sm:text-lg font-bold">
                          <span className="portfolio-link">
                            {project.title}
                          </span>
                        </h3>
                        <p className="py-4 text-sm flex-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="btn-5 absolute right-0 sm:right-12 lg:right-10 top-1/2 transform -translate-y-1/2 z-10"
          >
            &#10095;
          </button>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <Link href={'/#about'}>
            <button className="btn-3">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
