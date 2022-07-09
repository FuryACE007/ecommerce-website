import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "../styles/Home.module.css";

const HeroBanner = () => {
  return (
    <>
      {/* <div className=" absolute rotate-12 lg:w-auto lg:top-auto lg:left-auto md:w-[135px] md:left-14 md:top-8">
        <Image
          src="/headphone.png"
          alt="hero-banner"
          width={180}
          height={180}
        />
      </div> */}
      <div
        className={`bannerArea px-10 py-8 mx-auto md:mt-10 h-[21rem] shadow-[#C4FB6D] bg-[#A7D129] ${classes.card} rounded-3xl hover:cursor-pointer`}
      >
        <h3 className=" leading-loose text-xl text-[#616F39] font-medium">
          SMALL TEXT
        </h3>
        <h1 className=" text-[#3E432E] mx-auto text-5xl font-semibold">
          MID TEXT
        </h1>
        <Link href="/">
          <button className=" px-8 py-3 my-12 bg-[#0F0E0E] rounded-3xl rounded-tl-none hover:rounded-none hover:bg-slate-50 hover:text-[#0F0E0E] transition-all">
            CLICK ME
          </button>
        </Link>
        <div className=" text-right">
          <h5 className=" text-lg font-semibold text-[#1A4D2E]">Description</h5>
          <p className=" text-[#346751]">DESCRIPTION</p>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
