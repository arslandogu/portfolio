import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black w-full mobile:flex items-center justify-center md:w-[calc(70%+100px)] p-6 rounded-tl-3xl text-white py-10 mobile:py-12 ml-auto">
      <div className="sm:flex items-center flex mobile:flex-col justify-evenly">
        <div className="flex flex-col mobile:py-2 md:mr-3 mobile:mb-6 gap-6">
          <div className="text-gray-500 flex gap-6">
            <a className="cursor-pointer" target="_blank" href="https://github.com/doguhanarslan">
              <DiGithubBadge className="hover:text-white mobile:w-16 mobile:h-16 w-20 h-20 duration-300" />
            </a>
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://www.linkedin.com/in/arslan-doguhan/"
            >
              <FaLinkedin className="hover:text-blue-500 mobile:w-16 mobile:h-16 w-20 h-20 duration-300" />
            </a>
          </div>
        </div>
        <div className="border p-5 rounded-md">
          <h2 className="text-xl mobile:text-2xl text-center font-secondary font-semibold text-white mb-4">
            Contact Me
          </h2>
          <div className="text-base text-[15px] flex flex-col gap-4">
            <p className="font-secondary text-[18px]">arslandoguu@icloud.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
