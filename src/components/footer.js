import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="bg-gray-50 max-w-screen flex md:flex-row flex-col justify-evenly items-start p-2">
        {/* Company name with social media icons */}
        <div className="p-5">
          <ul>
            <li className="font-bold text-3xl pb-6">
              <Link href={'/#home'}>
                Webcraft <span className="text-[#7D1CBF]">Studios</span>
              </Link>
            </li>
            <div className="flex justify-center gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            </div>
          </ul>
        </div>
        {/* Section: Company */}
        <div className="p-5">
          <ul>
            <h2 className="font-bold text-xl pb-4">Company</h2>
            <li className="text-md text-gray-700 pb-2 font-semibold hover:text-[#7D1CBF] cursor-pointer">
              About Us
            </li>
            <li className="text-md text-gray-700 pb-2 font-semibold hover:text-[#7D1CBF] cursor-pointer">
              Our Team
            </li>
            <li className="text-md text-gray-700 pb-2 font-semibold hover:text-[#7D1CBF] cursor-pointer">
              News
            </li>
          </ul>
        </div>
        {/* Section: Services */}
        <div className="p-5">
          <ul>
            <h2 className="font-bold text-xl pb-4">Services</h2>
            <li className="font-semibold text-gray-700 pb-2 hover:hover:text-[#7D1CBF] cursor-pointer">
              Web Design
            </li>
            <li className="font-semibold text-gray-700 pb-2 hover:hover:text-[#7D1CBF] cursor-pointer">
              Web Development
            </li>
            <li className="font-semibold text-gray-700 pb-2 hover:hover:text-[#7D1CBF] cursor-pointer">
              Digital Marketing
            </li>
            <li className="font-semibold text-gray-700 pb-2 hover:hover:text-[#7D1CBF] cursor-pointer">
              Branding
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom section */}
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50 text-sm">
        <a href={'/#home'}>
          © 2024 All rights reserved | Built by Webcraft Studios
        </a>
      </div>
    </>
  );
}
