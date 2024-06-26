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
        <div className="flex justify-between items-center h-full w-full ">
          <Link className="flex items-center ml-4" href="/#home">
            <Image
              src={resolvedTheme === 'light' ? logo : logowhite}
              alt="logo"
              width={20}
              height={20}
              className="cursor-pointer rounded-sm mr-3"
              priority
            />
            <h1 className="font-bold">Webcraft Studios</h1>
          </Link>

          <div className="hidden text-sm sm:flex mr-5">
            <ul className="hidden sm:flex space-x-10">
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
              <li className="pt-1">
                <ThemeToggle />
              </li>
            </ul>
          </div>
          <div
            onClick={handleHeader}
            className="sm:hidden cursor-pointer mr-2 pl-24"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={`sm:hidden h-screen ease-in duration-500 p-10 ${
            menuOpen
              ? 'fixed left-0 top-0 w-[65%]  bg-[#ecf0f3] '
              : 'fixed left-[-100%] top-0'
          }`}
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleHeader} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href="/#home">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Home
                </li>
              </Link>
              <Link href="/#services">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Services
                </li>
              </Link>
              <Link href="/#portfolio">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Portfolio
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  About
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
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
