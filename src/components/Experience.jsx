import React from "react";
import firstEmp from "../assets/employers/durbin_technologies_logo.jpg";
import secondEmp from "../assets/employers/altortech_logo.jpg";
import thirdEmp from "../assets/employers/matainja_technologies_logo.jpg";
function Experience() {
  return (
    <div className="grid md:grid-cols-2 p-5 pl-0 bg-[#291C3A]">
      <p className="flex justify-center md:justify-start items-center text-white md:text-2xl font-semibold py-5  md:pl-10 md:py-10">
        Employers I have worked with
      </p>
      <div className="flex justify-around">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={firstEmp}
            alt="first employer"
            className="w-10 h-10 md:w-16 md:h-16 rounded-lg"
          />
          <span className="text-sm md:text-xl text-white text-center">
            Durbin Technologies
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={secondEmp}
            alt="second employer"
            className="w-10 h-10 md:w-16 md:h-16 rounded-lg"
          />
          <span className="text-sm md:text-xl text-white text-center">
            Altor smart mobility
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src={thirdEmp}
            alt="third employer"
            className="w-10 h-10 md:w-16 md:h-16 rounded-lg"
          />
          <span className="text-sm md:text-xl text-white text-center">
            Matainja technologies
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
