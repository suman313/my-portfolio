import React, { useState } from "react";
import altorProjectImage from "../assets/altor/altor.svg";
import addRider from "../assets/altor/addArider.svg";
import events from "../assets/altor/events.svg";
import home from "../assets/altor/home.svg";
import riderProfile from "../assets/altor/riderProfile.svg";
import rideStartEnd from "../assets/altor/rideStartEnd.svg";
import { altorInfo } from "../Infos/AltorInfo";
import ButtonStack from "./buttons/ButtonStack";
import ImageContent from "./ImageLoaders/ImageContent";
import "./altor.css";
function AltorSection() {
  const [visibleSection, setVisibleSection] = useState(0);
  let sections = [
    "Home",
    "Add Rider",
    "Rider Profile",
    "Events",
    "Time tracker",
  ];
  return (
    <div
      className="section grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0   pb-10 transition-all my-20 px-5"
      id="section"
    >
      <div className="order-last md:order-none flex  flex-col justify-start md:justify-center items-center md:mx-[3rem]  bg-[#fff] rounded-lg font-serif py-5">
        <p className="text-[1.5rem] md:text-[2.5rem]">
          {altorInfo[visibleSection].heading}
        </p>
        <p className="text-[1rem] md:text-[1.2rem] text-[#676262] p-4 pt-1  md:p-10">
          {altorInfo[visibleSection].description}
        </p>
        <button className="font-[400] text-lg bg-[#4240b1] px-4 text-white rounded-md">
          See more
        </button>
        <div className=" flex gap-2  py-5 md:p-10 overflow-auto">
          <ButtonStack content="React Js" />
          <ButtonStack content="CSS" />
          <ButtonStack content="Web Socket" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 ">
        <div>
          <div
            className={`${
              visibleSection == 0
                ? "visible-effect-altor"
                : "hidden-effect-altor"
            }`}
          >
            {" "}
            <ImageContent imgSrc={home} />
          </div>
          <div
            className={`${
              visibleSection == 1
                ? "visible-effect-altor"
                : "hidden-effect-altor"
            }`}
          >
            {" "}
            <ImageContent imgSrc={addRider} />
          </div>
          <div
            className={`${
              visibleSection == 2
                ? "visible-effect-altor"
                : "hidden-effect-altor"
            }`}
          >
            {" "}
            <ImageContent imgSrc={riderProfile} />
          </div>
          <div
            className={`${
              visibleSection == 3
                ? "visible-effect-altor"
                : "hidden-effect-altor"
            }`}
          >
            {" "}
            <ImageContent imgSrc={events} />
          </div>
          <div
            className={`${
              visibleSection == 4
                ? "visible-effect-altor"
                : "hidden-effect-altor"
            }`}
          >
            {" "}
            <ImageContent imgSrc={rideStartEnd} />
          </div>
        </div>

        <div className="flex w-full justify-between px-5 overflow-scroll md:overflow-auto">
          {sections.map((item, index) => (
            <>
              <button
                onClick={() => setVisibleSection(index)}
                className={`shadow-lg  text-[1.075rem] px-6 rounded-lg whitespace-nowrap ${
                  visibleSection == index
                    ? "bg-slate-100 text-[#151414] "
                    : "bg-[#292727] text-[#b2e0b5]"
                }`}
              >
                {item}
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AltorSection;
