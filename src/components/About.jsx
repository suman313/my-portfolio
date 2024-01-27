import React from "react";
import aboutUsImg from "../assets/aboutUsPic.svg";

function About() {
  return (
    <section
      className="section flex flex-col justify-center items-center py-5 md:py-20 transition-all"
      id="section-about"
    >
      <p className="text-[1.3rem] md:text-[2.5rem] pt-5 pb-5">About Me</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%]">
        <div className="flex justify-center items-center">
          <img
            src={aboutUsImg}
            alt="about-us-image"
            className="h-[8rem] w-fit md:h-[20rem]"
          />
        </div>
        <div className="h-full  flex justify-center items-center text-sm md:text-lg text-[#696868]">
          Passionate about music and societal impact, I thrive on playing the
          guitar and singing, finding joy in creating melodies. Beyond music, my
          love for dogs, drawn by their loyalty, leads me to allocate part of my
          earnings for their well-being, bringing immense happiness.
          {/* <br />
          <br /> Intrigued by societal change, I eagerly explore new avenues for
          positive impact. Equally, I cherish meeting new people, fostering
          connections, and embracing diverse perspectives.
          <br />
          <br /> Life for me is a harmonious blend of artistic expression,
          philanthropy, and the joy of building meaningful relationships with
          both people and animals. */}
        </div>
      </div>
    </section>
  );
}

export default About;
