import React from "react";
import patterns from "../assets/backgrounds/pattern-sticks.svg";
function About() {
  return (
    <div className="grid md:grid-cols-2 bg-[#DCCFED] justify-center justify-items-center py-2 md:py-10 px-5">
      <img src={patterns} alt="" className="hidden md:block w-full h-[20rem]" />
      <div className="about-section flex flex-col text-[#331C52] md:w-[70%]">
        <p className="text-[2rem] font-bold text-center">About Me</p>
        <p className=" text-md md:text-xl pl-4 py-6">
          As a web developer I am responsible for building interactive user
          interfaces.
          {/* <br /> */}
          From integrating large data on the UI to developing diverse customized
          features,
          {/* <br /> */}I have contributed in many large scale projects proving
          myself an important team member.
        </p>
      </div>
    </div>
  );
}

export default About;
