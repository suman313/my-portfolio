import React from "react";
import "./hero.css";
import heroImg from "../assets/heroImg.jpg";
import githublogo from "../assets/githublogo.svg";
import instalogo from "../assets/instalogo.svg";
import linkedinglogo from "../assets/linkedinlogo.svg";
function HeroSection() {
  return (
    <div className="hero-section grid grid-cols-2 ">
      <div className="text-section flex flex-col justify-center pl-10 py-10 gap-4">
        <div className="">
          <p className="text-4xl font-bold text-white">Hello</p>
        </div>

        <p className="text-[5rem] text-[#6E369B] font-bold leading-none">
          I'm a web <br /> Developer
        </p>
        <p className="text-2xl font-medium text-white">
          I build things for the web
        </p>
        <div className="flex justify-start gap-4">
          <img
            src={githublogo}
            alt="git-hub"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            src={linkedinglogo}
            alt="instagram"
            className="w-10 h-10 cursor-pointer"
          />
          <img
            src={instalogo}
            alt="linkeding"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
      <div className="img-section">
        <img
          src={heroImg}
          alt="hero section image"
          className="w-full h-[30rem] "
        />
      </div>
    </div>
  );
}

export default HeroSection;