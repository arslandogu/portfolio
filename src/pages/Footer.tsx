import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
function Footer() {
  return (
    <footer className="bg-black w-[60%] mx-auto p-6 rounded-tl-xl rounded-tr-xl text-white py-16 font-titleFont">
      <div className="mx-auto ml-0 sm:flex justify-around max-w-screen-lg grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-6">
          <div className="text-gray-500 cursor-pointer flex gap-4">
            <DiGithubBadge className=" hover:text-white w-24 h-24 duration-300" />
            <FaLinkedin className=" hover:text-blue-500 w-24 h-24 duration-300" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Me</h2>
          <div className="text-base text-[15px] flex flex-col gap-4">
            <p>E-mail: arslandoguu@icloud.com</p>
            <p>Phone: +90 5555555555</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
