import React, { useEffect, useRef, useState } from "react";
import assetImages from "../assets/assetTracker/allAssetImage.svg";

import assetSection from "../assets/assetTracker/AssetsSection.png";
import dashboard from "../assets/assetTracker/assetTrackerDashboard.png";
import maintenance from "../assets/assetTracker/maintenance.jpg";
import operators from "../assets/assetTracker/operators.jpg";

import "./components.css";
import "./asset.css";
import { assetInfos, videoLinks } from "../Infos/AssetInfo";
import ButtonStack from "./buttons/ButtonStack";
import ImageContent from "./ImageLoaders/ImageContent";
function AssetSection() {
  const [visibleSection, setVisibleSection] = useState(0);
  const sectionRef = useRef(null);
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionObserver.observe(sectionRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);
  return (
    <div
      className="asset-section grid grid-cols-1 gap-6 md:gap-2 md:grid-cols-2 my-5 md:my-10 px-5"
      ref={sectionRef}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <div
            className={`${
              visibleSection == 0 ? "visible-effect" : "hidden-effect"
            }`}
          >
            {" "}
            <ImageContent imgSrc={assetImages} />
          </div>

          <div
            className={`${
              visibleSection == 1 ? "visible-effect" : "hidden-effect"
            }`}
          >
            {" "}
            <ImageContent imgSrc={dashboard} />
          </div>
          <div
            className={`${
              visibleSection == 2 ? "visible-effect" : "hidden-effect"
            }`}
          >
            {" "}
            <ImageContent imgSrc={assetSection} />
          </div>
          <div
            className={`${
              visibleSection == 3 ? "visible-effect" : "hidden-effect"
            }`}
          >
            {" "}
            <ImageContent imgSrc={maintenance} />
          </div>
          <div
            className={`${
              visibleSection == 4 ? "visible-effect" : "hidden-effect"
            }`}
          >
            {" "}
            <ImageContent imgSrc={operators} />
          </div>
        </div>
        <div className="flex w-full justify-between px-5 gap-2 md:gap-2 overflow-scroll md:overflow-auto  text-sm md:text-lg lg:text-xl">
          <button
            onClick={() => setVisibleSection(0)}
            className={`shadow-lg   px-6 rounded-lg ${
              visibleSection == 0
                ? "bg-slate-100 text-[#151414] "
                : "bg-[#292727] text-[#b2e0b5]"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setVisibleSection(1)}
            className={`shadow-lg   px-6 rounded-lg ${
              visibleSection == 1
                ? "bg-slate-100 text-[#151414] "
                : "bg-[#292727] text-[#b2e0b5]"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setVisibleSection(2)}
            className={`shadow-lg   px-6 rounded-lg ${
              visibleSection == 2
                ? "bg-slate-100 text-[#151414] "
                : "bg-[#292727] text-[#b2e0b5]"
            }`}
          >
            Assets
          </button>
          <button
            onClick={() => setVisibleSection(3)}
            className={`shadow-lg   px-6 rounded-lg ${
              visibleSection == 3
                ? "bg-slate-100 text-[#151414] "
                : "bg-[#292727] text-[#b2e0b5]"
            }`}
          >
            Maintenance
          </button>
          <button
            onClick={() => setVisibleSection(4)}
            className={`shadow-lg   px-6 rounded-lg ${
              visibleSection == 4
                ? "bg-slate-100 text-[#151414] "
                : "bg-[#292727] text-[#b2e0b5]"
            }`}
          >
            Operators
          </button>
        </div>
      </div>

      <div className=" flex flex-col justify-start md:justify-center items-center md:mx-[3rem]  bg-[#fff] rounded-lg font-serif py-5">
        <p className="text-[1.3rem] md:text-[2.5rem]">
          {assetInfos[visibleSection].heading}
        </p>
        <p className="text-[0.7rem] md:text-[1.2rem] text-[#282a28] p-5 md:p-10">
          {assetInfos[visibleSection].description}
          {/* <button className="md:hidden m-2 md:m-0 font-[400] text-lg bg-[#4240b1] px-4 text-white rounded-md">
            See more
          </button> */}
        </p>
        <button className=" font-[400] text-sm md:text-lg lg:text-xl bg-[#4240b1] px-4 text-white rounded-md">
          <a href={videoLinks[visibleSection]} target="_blank">
            see more
          </a>
        </button>
        <div className=" flex w-full gap-2  py-5 px-3 md:p-10 overflow-scroll md:overflow-auto">
          <ButtonStack content="React Js" />
          <ButtonStack content="Tailwind Css" />
          <ButtonStack content="Web Socket" />
          <ButtonStack content="Figma" />
          <ButtonStack content="Postgres" />
          <ButtonStack content="Python" />
        </div>
      </div>
    </div>
  );
}

export default AssetSection;
