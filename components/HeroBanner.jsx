import React from "react";
import Image from "next/image";

import classes from "../styles/Home.module.css";

const HeroBanner = () => {
  return (
    <>
      <div className=" absolute rotate-12 md:w-[150px] md:left-14 md:top-8">
        <Image
          src="/headphone.png"
          alt="hero-banner"
          width={200}
          height={200}
        />
      </div>
      <div
        className={`bannerArea text-center mx-auto md:mt-10 h-[21rem] shadow-[#C4FB6D] bg-[#A7D129] ${classes.card} rounded-3xl hover:cursor-pointer`}
      >
        <h1 className=" text-[#3E432E] mx-auto text-5xl pt-10 font-semibold">
          Best Selling Products
        </h1>
        <h3 className=" leading-loose text-xl text-[#616F39] font-medium">
          Have them all in one place
        </h3>
      </div>
    </>
  );
};

export default HeroBanner;
