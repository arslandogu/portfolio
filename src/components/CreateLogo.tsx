import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  props: StaticImageData;
  className?: string;
}

function Logo({ props, className }: Props) {
  return (
    <div
      className={
        className
          ? `${className} w-[160px] mobile:w-[140px] mobile:h-[140px] lg:flex backdrop:filter backdrop-blur-[1px] h-[160px]`
          : "w-[160px] lg:flex backdrop:filter backdrop-blur-[1px] h-[160px]"
      }
    >
      <Image
        src={props}
        alt="user"
        className="object-cover"
        fill
      />
    </div>
  );
}

export default Logo;
