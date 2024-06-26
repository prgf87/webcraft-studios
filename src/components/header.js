// import Image from 'next/image';
// import logo from '../../public/images/logo/logo.png';
// import Link from 'next/link';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { useState } from 'react';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const handleHeader = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="sticky top-0 w-full h-20 shadow-lg bg-white z-10">
//       <div className="max-w-[1600px] mx-auto h-full px-8">
//         <div className="flex justify-between items-center h-full w-full ">
//           <Link className="flex items-center ml-4" href="/#home">
//             <Image
//               src={logo}
//               alt="logo"
//               width={20}
//               height={20}
//               className="cursor-pointer rounded-sm mr-3"
//               priority
//             />
//             <h1 className="font-bold inline-block">Webcraft Studios</h1>
//           </Link>

//           <div className="hidden text-sm sm:flex mr-5">
//             <ul className="hidden sm:flex space-x-10">
//               <Link href="/#services">
//                 <li>Services</li>
//               </Link>
//               <Link href="/#portfolio">
//                 <li>Portfolio</li>
//               </Link>
//               <Link href="/#about">
//                 <li>About</li>
//               </Link>
//               <Link href="/#contact">
//                 <li>Contact</li>
//               </Link>
//             </ul>
//           </div>
//           <div
//             onClick={handleHeader}
//             className="sm:hidden cursor-pointer mr-2 pl-24"
//           >
//             <AiOutlineMenu size={25} />
//           </div>
//         </div>
//         <div
//           className={`sm:hidden h-screen ease-in duration-500 p-10 ${
//             menuOpen
//               ? 'fixed left-0 top-0 w-[65%]  bg-[#ecf0f3] '
//               : 'fixed left-[-100%] top-0'
//           }`}
//         >
//           <div className="flex w-full items-center justify-end">
//             <div onClick={handleHeader} className="cursor-pointer">
//               <AiOutlineClose size={25} />
//             </div>
//           </div>
//           <div className="flex-col py-4">
//             <ul>
//               <Link href="/#home">
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   Home
//                 </li>
//               </Link>
//               <Link href="/#services">
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   Services
//                 </li>
//               </Link>
//               <Link href="/#portfolio">
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   Portfolio
//                 </li>
//               </Link>
//               <Link href="/#about">
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   About
//                 </li>
//               </Link>
//               <Link href="/#contact">
//                 <li
//                   onClick={() => setMenuOpen(false)}
//                   className="py-4 cursor-pointer"
//                 >
//                   Contact
//                 </li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import Image from 'next/image';
import logo from '../../public/images/logo/logo.png';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHeader = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-full h-20 shadow-lg bg-white z-10">
      <div className="max-w-[1600px] mx-auto h-full px-8">
        <div className="flex justify-between items-center h-full w-full">
          <Link className="flex items-center ml-4" href="/#home">
            <Image
              src={logo}
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

          <div className="hidden text-sm sm:flex mr-5">
            <ul className="hidden sm:flex space-x-10">
              <Link href="/#services">
                <li>Services</li>
              </Link>
              <Link href="/#portfolio">
                <li>Portfolio</li>
              </Link>
              <Link href="/#about">
                <li>About</li>
              </Link>
              <Link href="/#contact">
                <li>Contact</li>
              </Link>
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
