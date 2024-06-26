import React from 'react';
import Image from 'next/image';
import pic from '../../public/images/1.jpg';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="max-w-screen mx-auto py-4">
      <div id="banner" className="relative top-[-100px]" />
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid md:grid-cols-2 mx-auto gap-x-8">
          <Image
            src={pic}
            alt="picture"
            width={5184}
            height={3456}
            className="rounded-xl h-[25dvh] sm:h-[55dvh] w-[100dvw] object-cover object-center"
          />

          <div className="flex justify-start items-center text-base">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl font-bold pt-4 md:pt-0 pb-2 text-center sm:text-left">
                Elevating Your Digital Presence with{' '}
                <span className="text-[#7d1cbf]">Bespoke</span> Solutions
              </h2>
              <p className="py-4">
                At Webcraft Studios, we take great satisfaction in offering
                premium bespoke website solutions that are customised to each
                client&apos;s specific requirements.
              </p>
              <p className="pb-4">
                Our talented team works tirelessly to ensure your online
                presence is not only aesthetically pleasing but also practical
                and efficient.
              </p>
              <p className="pb-4">
                With years of experience in the field, we are aware of how
                crucial a strong online presence is in the cutthroat market of
                today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
