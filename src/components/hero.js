import React from 'react';
import pic from '../../public/images/4.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="max-w-xl sm:max-w-5xl mx-auto py-10">
      <div className="grid lg:grid-cols-2 mx-auto ">
        <div className="flex justify-start items-center p-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-x-8">
            <h1 className="text-4xl font-bold pb-4 sm:text-right lg:text-left">
              Let WebCraft Studios{' '}
              <span className="text-[#7D1CBF]">Elevate</span> Your Online
              Presence
            </h1>
            <div>
              <p>
                We are a team of passionate designers and developers dedicated
                to creating stunning, user-friendly websites that drive results
                for your business.
              </p>
              <div className="pt-4">
                <Link href={'/#about-us'}>
                  <button className="btn-1">Find Out More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-16 py-4">
          <Image
            src={pic}
            alt="picture"
            width={5184}
            height={3456}
            className="rounded-xl max-h-[35dvh] w-[100dvw] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
