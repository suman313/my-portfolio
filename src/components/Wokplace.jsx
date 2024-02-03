import React from "react";
import "./slider.css";
function Wokplace() {
  return (
    <div className=" container-0 grid md:grid-cols-2 md:gap-6 md:py-10 px-5  w-[90vw] rounded-[20px] ">
      <div className="flex justify-center items-center">
        <img
          src="https://camo.githubusercontent.com/452890c129355f9bb2202d3de81d474e2986da18bfa8ffa7ab09319398779671/68747470733a2f2f692e696d6775722e636f6d2f32477242514d7a2e6a7067"
          alt=""
          className="md:w-[50rem] md:h-[25rem] border-[0.72rem] rounded-[20px] cursor-pointer"
        />
      </div>
      <div className="desc-container flex flex-col justify-around items-center px-4">
        <p className="text-[#f4f2f2a3] text-2xl font-extrabold">Overview</p>
        <p className="text-white text-xl text-left font-extrabold font-serif">
          Disposable chat session: this app will allow two mutually agreed users
          to have a chat in end-to-end encrypted environment. The app itself
          doesn't track you or ask any infromation from you. Data is owned by
          only you and only while chatting. Your private key is generated on
          your device and never leaves your device. This is not a replacement of
          your usual chat application.
        </p>
        <div className="flex justify-between gap-2">
          <button className="font-[400] text-sm md:text-lg lg:text:xl bg-[#ce1a1a] px-4 text-white rounded-md">
            <a href="https://chat-e2ee-2.azurewebsites.net" target="_blank">
              Live Demo
            </a>
          </button>
          <button className="font-[400] text-sm md:text-lg lg:text:xl bg-[#454343] px-4 text-white rounded-md">
            <a
              href="https://github.com/muke1908/chat-e2ee?tab=readme-ov-file"
              target="_blank"
            >
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wokplace;
