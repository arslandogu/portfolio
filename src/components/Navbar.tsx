import NavLinks from "../data/NavLinks";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import classes from './NavLink.module.css';
interface NavbarProps {
  openNavbar: () => void;
}



const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const Navbar = ({ openNavbar }: NavbarProps) => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        styles.paddingX
      } sm:w-full md:w-[calc(70%+100px)] md:h-20 flex sm:flex rounded-bl-3xl sm:justify-between sticky rounded-br-3xl py-5 top-0 z-[99999] ${
        scrolled ? "bg-red-600" : "bg-black"
      }`}
    >
      <div className="flex w-full justify-between items-center md:max-w-7xl md:mx-auto">
        <Link
          to="/"
          className="items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[24px] font-secondary cursor-pointer text-center gap-x-[0.2em] flex-row flex flex-nowrap md:flex-wrap md:text-nowrap">
            Doğuhan
            <span className="text-red-600 font-[24px] text-center font-secondary">Arslan</span>
          </p>
        </Link>
      </div>
      <div className="items-center flex flex-row justify-between">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {NavLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? `${classes.active}` :` `
              } hover:text-white text-[20px] font-medium nav-link cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
          <div className="ml-[20px]" onClick={openNavbar}>
            <Bars3Icon className="w-[2rem] md:hidden h-[7vh] cursor-pointer text-white" />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
