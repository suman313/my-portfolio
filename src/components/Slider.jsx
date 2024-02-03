import React from "react";
import "./slider.css";
function Slider({ image, heading, description, link, index, lengthOfSlider }) {
  return (
    <div
      className={` container-${index} grid gap-2 md:grid-cols-2 md:gap-6 py-4  md:py-10 px-5  w-[90vw] `}
    >
      <div className="img-container ">
        <img
          src={image}
          alt="dashboard"
          className="md:w-[50rem] h-fit border-[0.72rem] rounded-[20px] cursor-pointer "
        />
      </div>
      <div className="desc-container grid grid-rows-[auto] gap-2 px-4">
        <p className="grid text-[#f4f2f2a3] text-base md:text-2xl font-extrabold">
          {heading}
        </p>
        <p className="text-white text-sm md:text-xl text-left font-extrabold font-serif">
          {description}
        </p>
        <button className=" font-[400] text-sm md:text-lg lg:text-xl bg-[#ce1a1a] px-4 text-white rounded-md">
          <a href={link} target="_blank">
            see more
          </a>
        </button>
      </div>
      {lengthOfSlider.map((item) => (
        <div className={`slide-indicator-${index} `}></div>
      ))}
    </div>
  );
}

export default Slider;