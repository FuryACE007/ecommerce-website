import React from "react";

import classes from '../styles/Home.module.css'

const HeroBanner = () => {
  return (
    <div
      className={`bannerArea text-center mx-auto h-[21rem] shadow-[#C4FB6D] bg-[#A7D129] ${classes.card} rounded-3xl hover:cursor-pointer`}
    >
      <h1 className=" text-[#3E432E] mx-auto text-5xl lg:pt-10 font-semibold">
        Best Selling Products
      </h1>
      <h3 className=" leading-loose text-xl text-[#616F39] font-medium">
        The Gaming Store
      </h3>
    </div>
  );
};

export default HeroBanner;
