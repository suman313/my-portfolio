import React from "react";
import firstEmp from "../assets/employers/durbin_technologies_logo.jpg";
import secondEmp from "../assets/employers/altortech_logo.jpg";
import thirdEmp from "../assets/employers/matainja_technologies_logo.jpg";
function Experience() {
  return (
    <div className="grid grid-cols-2 p-5 pl-0 bg-[#291C3A]">
      <p className="flex justify-start items-center text-white text-2xl font-semibold pl-10 py-10">
        Employers I have worked with
      </p>
      <div className="flex justify-around">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={firstEmp}
            alt="first employer"
            className="w-16 h-16 rounded-lg"
          />
          <span className="text-xl text-white">Durbin Technologies</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={secondEmp}
            alt="second employer"
            className="w-16 h-16 rounded-lg"
          />
          <span className="text-xl text-white">Altor smart mobility</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={thirdEmp}
            alt="third employer"
            className="w-16 h-16 rounded-lg"
          />
          <span className="text-xl text-white">Durbin Technologies</span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
