import React from "react";
import { languages } from "../data/data";
import SkillBar from "../components/SkillsBar";
import TimeLineItems from "../components/TimeLineItems";

const About = ()=> {
  return (
    <div id="about">
      <div className="grid w-[80%] mx-auto mobile:grid-rows-2 mobile:-mt-[10%] items-center md:grid-cols-1 place-content-center place-items-center justify-center text-center mb-[40px]">
        <h1 className="text-[40px] my-1.5 font-bold uppercase text-white">
          Education & Skills
        </h1>
        <span className="w-[20%] lg:w-[10%] my-[0.5px] mb-[10px] bg-red-600  md:block h-[3px] rounded-sm"/>
      </div>
      <div className="w-[90%] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-between mx-auto grid gap-[5rem]">
        <div className="backdrop:filter sm:grid-cols-1 grid shadow-2xl shadow-black p-[100px] backdrop-blur-md py-[10px] px-[25px] rounded-3xl">
          <div
            id="timeline-items"
          >
            <TimeLineItems />
            <TimeLineItems />
            <TimeLineItems />
            <TimeLineItems />
          </div>
          {/* <div className="grid items-center md:space-x-10 mb-[3rem] w-[100%]">
            <p className="text-[19px] w-[80%] text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially
              unchanged.dasdsadsaadsasd sdasdasadsdasa ssdaasdasdadsdsaads
              sdsdaadssdaasddssdaasd
            </p>
          </div> */}
        </div>
        <div className="backdrop:filter shadow-2xl shadow-black backdrop-blur-md rounded-3xl py-[10px] px-[25px]">
          <h1 className="my-1.5 font-bold text-[25px] text-white uppercase">
            Languages & Frameworks
          </h1>
          <div>
            <span className="w-[70px] my-[0.5px] mb-[10px] bg-red-600 hidden md:block h-[5px] rounded-sm"></span>
          </div>
          <div  className="grid items-center md:space-x-10 mb-[3rem]">
            <div className="grid gap-6 grid-cols-1">
              {languages.map((language) => {
                return <SkillBar data={language} key={language.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
