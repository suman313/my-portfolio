import React, { useEffect, useRef, useState } from "react";
import "./asset.css";
import Slider from "./Slider";

function AssetSectionRevised({ Info }) {
  const imgContainerRef = useRef();
  const backBtnRef = useRef();
  const forwardBtnRef = useRef();
  const slideThumbRef = useRef();
  const onSlideChange = (direction) => {
    console.log(direction);
    const slideDirection = direction === "previous" ? -1 : 1;
    const scrollAmount = imgContainerRef.current.clientWidth * slideDirection;
    imgContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const hideArrowKey = () => {
    const leftScrollAmount = imgContainerRef.current.scrollLeft;
    backBtnRef.current.style.display = leftScrollAmount > 0 ? "flex" : "none";
    forwardBtnRef.current.style.display =
      leftScrollAmount >=
      imgContainerRef.current.scrollWidth -
        (imgContainerRef.current.clientWidth +
          imgContainerRef.current.clientWidth / 2)
        ? "none"
        : "flex";
    slideThumbRef.current.style.width =
      imgContainerRef.current.clientWidth /
        (imgContainerRef.current.scrollWidth /
          imgContainerRef.current.clientWidth) +
      "px";
    slideThumbRef.current.style.left =
      imgContainerRef.current.scrollLeft /
        (imgContainerRef.current.scrollWidth /
          imgContainerRef.current.clientWidth) +
      "px";
  };
  useEffect(() => {
    imgContainerRef.current.addEventListener("scroll", hideArrowKey);
    slideThumbRef.current.style.width =
      imgContainerRef.current.clientWidth /
        (imgContainerRef.current.scrollWidth /
          imgContainerRef.current.clientWidth) +
      "px";
  }, []);
  return (
    <div className="relative">
      <div
        id="slide-prev"
        ref={backBtnRef}
        onClick={() => onSlideChange("previous")}
        className="absolute hidden  items-center justify-center left-[-10px] top-[40%] bg-slate-700 p-2 rounded-[50%] cursor-pointer"
      >
        <span className="material-symbols-outlined text-white">
          arrow_back_ios
        </span>
      </div>
      <div
        id="slide-next"
        ref={forwardBtnRef}
        onClick={() => onSlideChange("next")}
        className="absolute flex items-center justify-center slide-next right-[-10px] top-[40%] bg-slate-700 p-2 rounded-[50%] cursor-pointer"
      >
        <span class="material-symbols-outlined text-white">
          arrow_forward_ios
        </span>
      </div>

      <div
        id="img-container"
        ref={imgContainerRef}
        className="asset-container flex w-[90vw] rounded-[20px] mb-4"
      >
        {Info.map((item, index) => (
          <Slider
            key={item.heading}
            index={index}
            image={item.img}
            heading={item.heading}
            description={item.description}
            link={item.link}
            lengthOfSlider={Info}
          />
        ))}
      </div>
      <div className="slider-scrollbar ">
        <div className="slider-track flex">
          <div ref={slideThumbRef} className="slider-thumb"></div>
        </div>
      </div>
    </div>
  );
}

export default AssetSectionRevised;
