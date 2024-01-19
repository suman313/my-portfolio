import React from "react";
import wokplaceImg from "../assets/wokplace/totalComponents.svg";
function Wokplace() {
  return (
    <div
      className="section grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0  pt-10 pb-10 transition-all py-20 px-5"
      id="section"
    >
      <div className="flex justify-center items-center">
        <img src={wokplaceImg} alt="" className="w-[30rem] md:w-[35rem]" />
      </div>
      <div className="flex flex-col justify-start md:justify-center items-center md:mx-[3rem] bg-[#fff] rounded-lg font-serif py-5">
        <p className="text-[1.9rem] md:text-[2.5rem]">WokPlace</p>
        <p className="text-[1.2rem] text-[#676262] p-4 pt-1  md:p-10">
          A fully customized inventory cum operator management software
          application. It helps to keep track of the mining activities by
          providing the ability to monitor live events at the mining centers.
        </p>
        <button className="font-[400] text-lg bg-[#4240b1] px-4 text-white rounded-md">
          Confidential
        </button>
      </div>
    </div>
  );
}

export default Wokplace;
