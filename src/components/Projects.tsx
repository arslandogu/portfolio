import Image, { StaticImageData } from "next/image";
import React from "react";
import ProjectItems from "./ProjectItems";

interface ImageProps {
  imga: StaticImageData;
}

function Projects({ imga }: ImageProps) {

  return (
    <div id="projects" className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <div className="grid items-center place-items-center justify-center text-center ">
        <h1 className="text-[40px] text-center my-1.5 font-bold uppercase text-white">
          Projects
        </h1>
        <span className="w-[50%] my-[0.5px] mb-[10px] bg-red-600 hidden md:block h-[3px] rounded-sm"></span>
      </div>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          <ProjectItems/>
      </div>
    </div>
  );
}

export default Projects;
