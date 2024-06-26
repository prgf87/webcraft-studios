import Image from 'next/image';
import logo from '../../public/images/logo/logo.png';
import logowhite from '../../public/images/logo/logo-white.png';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import ThemeToggle from './theme';
import { useTheme } from 'next-themes';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { resolvedTheme } = useTheme();

  const handleHeader = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-full h-20 shadow-md bg-white dark:bg-[#101b46] z-20 shadow-gray-200 dark:shadow-[#c56fff]">
      <div className="max-w-[1600px] mx-auto h-full px-8">
        <div className="flex justify-between items-center h-full w-full">
          <Link className="flex items-center ml-4" href="/#home">
            <Image
              src={resolvedTheme === 'light' ? logo : logowhite}
              alt="logo"
              width={20}
              height={20}
              className="cursor-pointer rounded-sm mr-3"
              priority
            />
            <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
              Webcraft Studios
            </h1>
          </Link>

          <div className="sm:hidden">
            <ThemeToggle />
          </div>

          <div className="hidden text-sm sm:flex mr-5">
            <ul className="hidden sm:flex justify-center items-center space-x-6">
              <li>
                <Link href="/#services" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-gray-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
          <div className="sm:hidden mr-2">
            <AiOutlineMenu
              size={25}
              onClick={handleHeader}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div
          className={`sm:hidden h-screen ease-in-out duration-500 p-10 ${
            menuOpen
              ? 'fixed left-0 top-0 w-[65%] bg-[#ecf0f3] dark:bg-[#030329]'
              : 'fixed left-[-100%] top-0'
          }`}
        >
          <div className="flex w-full items-center justify-end">
            <div
              onClick={handleHeader}
              className="cursor-pointer hover:text-gray-400"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href="/#home">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer hover:text-gray-400"
                >
                  Home
                </li>
              </Link>
              <Link href="/#services">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer hover:text-gray-400"
                >
                  Services
                </li>
              </Link>
              <Link href="/#portfolio">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer hover:text-gray-400"
                >
                  Portfolio
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer hover:text-gray-400"
                >
                  About
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer hover:text-gray-400"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
