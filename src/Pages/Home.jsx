import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import developerImg from "../assets/developer-img.jpg";
import hand_wave from "../assets/waving_hand_.svg";
import location_indicator from "../assets/location indicator red_.svg";
import social_platform from "../assets/social_linkedin_.svg";
import github from "../assets/Github_.png";
import htmlLogo from "../assets/html_logo.svg";
import reactLogo from "../assets/react_logo.svg";
import javascriptLogo from "../assets/javascript_logo.svg";
import tailwindCSsLogo from "../assets/tailwindCss_logo.svg";
import mongoDBLogo from "../assets/mongoDB_logo.svg";
import sqlLogo from "../assets/sql_logo.svg";
import AssetSection from "../components/AssetSection";
import AltorSection from "../components/AltorSection";
import Wokplace from "../components/Wokplace";
import About from "../components/About";
import Contact from "../components/Contact";
function Home() {
  return (
    <Layout>
      <section className="flex flex-col h-[80vh] justify-between">
        <div className="developer-info-section flex flex-col md:flex-row justify-center items-center gap-10">
          {/* <div className="developer-img "> */}
          <img
            src={developerImg}
            alt="developer-image"
            // style={{ width: "40%" }}
            className="w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] rounded-[5%] md:rounded-[50%] border-[#464444] border-4"
          />
          {/* </div> */}
          <div className="developer-description flex flex-col justify-between md:self-start  ">
            <div className="developer-desc-heading  mb-5 flex justify-center items-center gap-5">
              <p className="text-[#464444] text-[1.5rem] md:text-[3.5rem] font-[400]">
                Full Stack Developer
              </p>
              <span>
                <img
                  src={hand_wave}
                  alt="hand wave"
                  className="w-[2.5rem] h-[2.5rem]"
                />
              </span>
            </div>
            <div className="developer-desc text-[#A09494] text-[1.25rem] font-[300] text-center">
              <p className="">Hi, I am Suman Modak. A passionate</p>
              <p>web application developer located at</p>
              <div className="flex justify-center items-center gap-2 ">
                <p>Kolkata, India</p>
                <span>
                  <img
                    src={location_indicator}
                    alt="location indicator"
                    className="w-[2rem] h-[2rem]"
                  />
                </span>
              </div>
              <div className="flex justify-center items-center gap-10 mt-5 pt-4">
                <img
                  src={social_platform}
                  alt="social platform"
                  className="h-6 w-6 md:h-10 md:w-10"
                />
                <img
                  src={github}
                  alt="github link"
                  className="h-6 w-6 md:h-10 md:w-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" tech-stack-info flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 my-[2rem] ">
          <div className="text-[#A09494] font-normal text-[0.8rem] md:text-[1.95rem] md:ml-24  whitespace-nowrap ">
            Tech Stack
          </div>
          <div className="w-[50%] h-[1px] md:w-1  md:h-16 bg-[#A09494]"></div>
          <div className="flex justify-center items-center gap-5 md:gap-16  ">
            <img
              src={htmlLogo}
              alt="html logo"
              className="w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem]"
            />
            <img
              src={reactLogo}
              alt="react Logo"
              className="w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem]"
            />
            <img
              src={javascriptLogo}
              alt="javascript Logo"
              className="w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem]"
            />
            <img
              src={tailwindCSsLogo}
              alt="tailwind css Logo"
              className="w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem]"
            />
            <img
              src={mongoDBLogo}
              alt="mongo DB Logo"
              className="w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem]"
            />
            <img
              src={sqlLogo}
              alt="sql Logo"
              className="w-[1rem] h-[1rem] md:w-[3rem] md:h-[3rem]"
            />
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center gap-6 md:gap-0 bg-[#d7d0d0] pt-6 border-2 border-[#bebaba]"
        id="section-asset"
      >
        <p className="text-[1.95rem] md:text-[2.95rem]  font-extralight text-[#464444]">
          Projects
        </p>
        <AssetSection />
        <AltorSection />
        <Wokplace />
      </section>
      <About />
      <Contact />
    </Layout>
  );
}

export default Home;
