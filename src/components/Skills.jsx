import React from "react";
import patterns from "../assets/backgrounds/pattern-sticks.svg";
import htmllogo from "../assets/skills/html_logo.svg";
import javascriptlogo from "../assets/skills/javascript_logo.svg";
import mongodblogo from "../assets/skills/mongoDB_logo.svg";
import reactlogo from "../assets/skills/react_logo.svg";
import sqllogo from "../assets/skills/sql_logo.svg";
import tailwindlogo from "../assets/skills/tailwindCss_logo.svg";
import cplus from "../assets/skills/cplus.svg";
import prisma from "../assets/skills/prisma.svg";
import postgres from "../assets/skills/postgres.svg";
import version from "../assets/skills/versionControl.svg";
import phplogo from "../assets/skills/php.svg";
import nodejs from "../assets/skills/nodelogo.svg";
// import  from "../assets/skills/"

function Skills() {
  return (
    <div className="grid md:grid-cols-2 bg-[#DCCFED] justify-center justify-items-center pb-8 md:pb-10 px-5">
      <div className="about-section flex flex-col gap-2 text-[#331C52] ">
        <p className="text-[2.2rem] font-bold bg-red text-center">Skills</p>
        <p className="text-sm md:text-xl">
          Technologies I have recently worked with
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={htmllogo} alt="" className="w-full h-[2rem] " />
          </div>
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img
              src={javascriptlogo}
              alt=""
              className="w-full h-[2rem] rounded-lg"
            />
          </div>

          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img
              src={mongodblogo}
              alt=""
              className="w-full h-[2rem] rounded-lg"
            />
          </div>

          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img
              src={reactlogo}
              alt=""
              className="w-full h-[2rem] rounded-lg"
            />
          </div>
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={sqllogo} alt="" className="w-full h-[2rem] rounded-lg" />
          </div>
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img
              src={tailwindlogo}
              alt=""
              className="w-full h-[2rem] rounded-lg"
            />
          </div>
        </div>
        <p className="text-sm md:text-xl">Good with</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={cplus} alt="" className="w-full h-[2rem] " />
          </div>
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={prisma} alt="" className="w-full h-[2rem] rounded-lg" />
          </div>

          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={postgres} alt="" className="w-full h-[2rem] rounded-lg" />
          </div>

          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={version} alt="" className="w-full h-[2rem] rounded-lg" />
          </div>
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={nodejs} alt="" className="w-full h-[2rem] rounded-lg" />
          </div>
          <div className="rounded-lg bg-[#fff] py-2 w-[80%] ">
            <img src={phplogo} alt="" className="w-full h-[2rem] rounded-lg" />
          </div>
        </div>
      </div>
      <img src={patterns} alt="" className="hidden md:block w-full h-[20rem]" />
    </div>
  );
}

export default Skills;
