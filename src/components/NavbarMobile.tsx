import navLinks from "@/data/navLinks";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface NavbarProps {
  navbar: boolean;
  closeNavbar: () => void;
}

function NavbarMobile({ navbar, closeNavbar }: NavbarProps) {
  const navAnimation = navbar ? "translate-x-0" : "translate-x-full";
    const [active, setActive] = useState("");

    const handleClick = (nav:any) => {
        setActive(nav.title);
        closeNavbar();
    }
  return (
    <div
      className={`${navAnimation} fixed grid grid-rows-3 transform transition-all duration-300 top-0 left-0 right-0 z-[1000000] bottom-0 backdrop-blur-xl`}
    >
      <div
        className="flex justify-start p-10 items-start"
        onClick={closeNavbar}
      >
        <XMarkIcon className="top-[2rem] left-[2rem] w-[2rem] h-[2rem] text-white cursor-pointer" />
      </div>
      <div className="flex text-white flex-col items-center">
        {navLinks.map((nav) => (
          <div
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-secondary"
            } hover:text-white  font-secondary nav-link-mobile cursor-pointer`}
                onClick={handleClick}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </div>
        ))}
          </div>
    </div>
  );
}

export default NavbarMobile;
