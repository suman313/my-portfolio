import React from "react";
import sendlogo from "../assets/send.svg";
import instalogo from "../assets/instalogo_btm.svg";
import fblogo from "../assets/fblogo_btm.svg";
import linkedinlogo from "../assets/linkedinlogo_btm.svg";
function Contact() {
  return (
    <div className="grid grid-cols-2 py-16 ">
      <div className="flex flex-col gap-32 px-10">
        <p className="text-4xl font-extrabold text-[#331C52]">
          Let's build something that matters
        </p>
        <div className="flex flex-col gap-16">
          <p className="text-[#331C52] text-xl font-semibold">
            I'm interested in...
          </p>
          <div className="grid grid-cols-3 gap-3">
            <p className="border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
              Ecommerce
            </p>
            <p className="border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
              Sass
            </p>
            <p className="border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
              Portfolio
            </p>
            <p className="border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
              Landing Page
            </p>
            <p className="border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
              Blogging Platform
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full gap-10 px-32 ">
        <div className="flex flex-col gap-4">
          <label for="name" className="text-xl font-[600] text-[#331C52]">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="p-2 border-[2px] border-[#b3b0b0] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label for="email" className="text-xl font-[600] text-[#331C52]">
            Your Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Your Email"
            className="p-2 border-[2px] border-[#b3b0b0] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label
            for="description"
            className="text-xl font-[600] text-[#331C52]"
          >
            Your Message
          </label>
          <textarea
            id="description"
            rows="5"
            columns="10"
            className="p-2 border-[2px] border-[#b3b0b0] rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center gap-4 rounded-lg bg-[#331C52] px-4 py-2 cursor-pointer">
          <img src={sendlogo} alt="sendIcon" className="w-6 h-6" />
          <button className="text-2xl font-medium text-white">Send</button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img
            src={instalogo}
            alt="instalogo"
            className="w-[4vw] border-[1px] border-[#331C52] rounded-full p-4"
          />
          <img
            src={fblogo}
            alt="fblogo"
            className="w-[4vw] border-[1px] border-[#331C52] rounded-full p-4"
          />
          <img
            src={linkedinlogo}
            alt="linkedinglogo"
            className="w-[4vw] border-[1px] border-[#331C52] rounded-full p-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
