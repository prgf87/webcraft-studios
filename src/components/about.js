import Image from 'next/image';
import profilePicPedro from '../../public/images/pedro.jpg';
import profilePicJosh from '../../public/images/josh.png';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-20 py-8">
      <h2 className="text-center mb-3">The Team</h2>
      <div id="about" className="relative top-[-100px]" />
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white mb-8">
        <div className="text-sm mx-auto">
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <h2 className="text-2xl font-bold">
              Hey, my name is Pedro - Senior Developer & MD
            </h2>
          </div>
          <p className="mb-4">
            As a senior web developer I specialize in React, Tailwind, and full
            stack applications,
          </p>
          <p className="mb-4">
            I bring expertise and passion to every project.
          </p>
          <p className="mb-4">
            My approach is friendly and helpful, ensuring that clients receive
            top-notch solutions tailored to their unique needs and goals.
          </p>

          <p>
            All we care about is how many new customers we get you and how much
            profit we add to your bottom line.
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0">
          <div className="relative ">
            <Image
              src={profilePicPedro}
              alt="Profile Picture"
              className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64"
            />
            <div className="absolute -bottom-5 sm:bottom-5 -right-10 sm:-right-5 w-32 h-32 bg-purple-500 text-white flex items-center justify-center rounded-full transform translate-x-4 translate-y-4">
              <p className="text-center text-sm">
                “I hope to add value to your website.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-20">
        <div className="text-sm mx-auto">
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <h2 className="text-2xl font-bold">
              Hey, my name is Josh - Junior Developer
            </h2>
          </div>
          <p className="mb-4">
            As a Junior web developer I specialize in React, Tailwind, and full
            stack applications,
          </p>
          <p className="mb-4">
            I bring expertise and passion to every project.
          </p>
          <p className="mb-4">
            My approach is friendly and helpful, ensuring that clients receive
            top-notch solutions tailored to their unique needs and goals.
          </p>
          <p>
            All we care about is how many new customers we get you and how much
            profit we add to your bottom line.
          </p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0">
          <div className="relative -left-5">
            <Image
              src={profilePicJosh}
              alt="Profile Picture"
              className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64"
            />
            <div className="absolute bottom-0 left-[-40px] w-32 h-32 bg-purple-500 text-white flex items-center justify-center rounded-full transform -translate-x-4 translate-y-4">
              <p className="text-center text-sm">
                “Let us help you with your dream.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
