import Image from "next/image";
import React from "react";

export default function AnimationViruses() {
  return (
    <div className="relative w-full md:w-[50vw] -z-10 -mb-16 lg:-mb-12 mx-auto h-[33vh]">
      <Image
        src={"/gif/virus-animation.gif"}
        alt="virus"
        layout="fill"
        objectFit="cover"
        unoptimized={true}
      />
    </div>
  );
}
