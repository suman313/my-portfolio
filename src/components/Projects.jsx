import React from "react";
import AssetImg from "../assets/assetTracker/AssetsSection.png";
import AltorImg from "../assets/altor/home.svg";
import forwardlogo from "../assets/forward_arrow.svg";
import "./project.css";
function Projects() {
  return (
    <div className="bg-[#291C3A] py-10">
      <div className="grid grid-cols-2 py-16 px-4">
        <div className="relative project-container cursor-pointer">
          <img src={AssetImg} alt="asset section" className="rounded-[20px] " />
          <div className="project-item text-white  text-[2rem]">
            Born from a passion for design, we envision, design, and create
            apps, websites and brands from a seeded idea into a unique
            experience.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 ">
          <p className="flex justify-center items-center text-[#bee0d6] text-[2.118vw] leading-[2.706vw] font-[400] tracking-[-0.02em] p-4">
            Asset Tracker
          </p>
          <span className="border-[2px] border-[#fff] rounded-full p-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
            <img src={forwardlogo} alt="forward Logo" className="w-16" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 py-16 px-4">
        <div className="flex flex-col justify-center items-center gap-6 ">
          <p className="flex justify-center items-center text-[#bee0d6] text-[2.118vw] leading-[2.706vw] font-[400] tracking-[-0.02em] p-4">
            Chat E2EE
          </p>
          <span className="border-[2px] border-[#fff] rounded-full p-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
            <img src={forwardlogo} alt="forward Logo" className="w-16" />
          </span>
        </div>
        <div className="relative project-container cursor-pointer">
          <img
            src="https://camo.githubusercontent.com/452890c129355f9bb2202d3de81d474e2986da18bfa8ffa7ab09319398779671/68747470733a2f2f692e696d6775722e636f6d2f32477242514d7a2e6a7067"
            alt="chat-e2ee"
            className="h-[55vh] w-full rounded-[20px] right-0"
          />
          <div className="project-item text-white  text-[2rem]">
            Born from a passion for design, we envision, design, and create
            apps, websites and brands from a seeded idea into a unique
            experience.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 py-16 px-4">
        <div className="relative project-container cursor-pointer">
          <img src={AltorImg} alt="altor section" className="rounded-[20px]" />
          <div className="project-item text-white  text-[2rem]">
            Born from a passion for design, we envision, design, and create
            apps, websites and brands from a seeded idea into a unique
            experience.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 ">
          <p className="flex justify-center items-center text-[#bee0d6] text-[2.118vw] leading-[2.706vw] font-[400] tracking-[-0.02em] p-4">
            Smart Helmet
          </p>
          <span className="border-[2px] border-[#fff] rounded-full p-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
            <img src={forwardlogo} alt="forward Logo" className="w-16" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
