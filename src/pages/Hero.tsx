import React from "react";
import Particle from "../components/Particle";
import TextEffect from "../components/TextEffect";
import { StaticImageData } from "next/image";
import {reactImg,js,redux,ts,githb,cssL,reactNimg} from '@/components';
import Logo from "../components/CreateLogo";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function Hero() {

  const reactLogo = reactImg as StaticImageData;
  return (
    <div id="home" className="bg-cover bg-center mb-[20em]">
      <Particle />
      <div className="w-[100%] px-[5rem] mobile:px-[2rem] place-items-center sm:mt-[5%] mobile:grid-cols-1 lg:grid-cols-2 gap-[20vw] h-[100%] grid items-center place-content-center">
        <div className="mobile:table-auto mobile:grid-rows-2 grid grid-cols-1 relative grid-rows-3 ">
          <h1 className="text-[2rem] mobile:max-w-[600px] text-nowrap whitespace-nowrap mobile:whitespace-normal md:text-[3rem] text-white font-primary place-items-center place-content-center">
            {"Hi, I'm"} <span className="mobile:text-[10px] font-secondary text-red-600"><TextEffect /></span>
          </h1>
          <p className="mobile:text-[21px] mobile:-mt-[4vh] text-[22px] text-white">
          Lorem Ipsumssss is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="mt-[2.8rem] flex justify-center items-center">
            <button className="px-[2rem] hover:bg-black hover:text-white transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-white text-black flex items-center space-x-2 rounded-3xl">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]"/>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mobile:grid-cols-2 place-items-center place-content-center gap-y-[6vh] grid-rows-2 gap-[8vh]">
        <Logo className="logo-container-top" props={reactLogo} />
          <Logo className="logo-container-top"  props={redux} />
          <Logo className="logo-container-top"  props={reactNimg} />
          <Logo className="logo-container-bottom"  props={js} />
          <Logo className="logo-container-bottom"  props={ts} />
          <Logo className="logo-container-bottom"  props={cssL} />
          <Logo className="logo-container-bottom"  props={cssL} />
          <Logo className="logo-container-bottom"  props={cssL} />
          <Logo className="logo-container-bottom"  props={cssL} />
          <Logo className="logo-container-bottom"  props={cssL} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
