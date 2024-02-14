import React, { useState } from "react";
import sendlogo from "../assets/send.svg";
import instalogo from "../assets/instalogo_btm.svg";
import fblogo from "../assets/fblogo_btm.svg";
import linkedinlogo from "../assets/linkedinlogo_btm.svg";
function Contact() {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = () => {
    emailjs
      .send("service_bdwm7rf", "contact_form", {
        to_name: "Suman",
        from_name: mailData.name,
        email_id: mailData.email,
        message: mailData.message,
        phone: mailData.phone_no,
      })
      .then(
        (res) => {
          alert(res.status, res.text);
          setMailData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="grid">
      <p className="text-center text-xl md:text-4xl font-bold text-[#331C52] py-2 md:py-6">
        Contact Me
      </p>
      <div className="grid md:grid-cols-2 py-8 md:py-16 ">
        <div className="flex flex-col justify-center md:justify-start items-center w-[70%] gap-16 md:gap-32 px-4 md:px-10">
          <p className="w-[80%] md:w-fit text-xl md:text-4xl font-extrabold text-[#331C52]">
            Let's build something that matters
          </p>
          <div className="flex flex-col gap-8 md:gap-16">
            <p className="text-[#331C52] text-xl font-semibold">
              I'm interested in...
            </p>
            <div className="grid  md:grid-cols-3 gap-1 md:gap-3 ">
              <p className="text-sm md:text-lg border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
                Ecommerce
              </p>
              <p className="text-sm md:text-lg border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
                Sass
              </p>
              <p className="text-sm md:text-lg border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
                Portfolio
              </p>
              <p className="text-sm md:text-lg border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
                Landing Page
              </p>
              <p className="text-sm md:text-lg border-[3px] border-[#331C52] rounded-lg p-2 font-medium text-[#331C52] text-center">
                Blogging Platform
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center  gap-4 md:gap-10 md:px-32 pt-6 md:pt-0 ">
          <div className="flex flex-col gap-4 md:w-full">
            <label
              for="name"
              className="text-base md:text-xl font-[600] text-[#331C52]"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="p-2 border-[2px] border-[#b3b0b0] rounded-lg"
              value={mailData.name}
              onChange={(e) =>
                setMailData({ ...mailData, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4 md:w-full">
            <label
              for="email"
              className="text-base md:text-xl font-[600] text-[#331C52]"
            >
              Your Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Your Email"
              value={mailData.email}
              className="p-2 border-[2px] border-[#b3b0b0] rounded-lg"
              onChange={(e) =>
                setMailData({ ...mailData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4 md:w-full">
            <label
              for="description"
              className="text-base md:text-xl font-[600] text-[#331C52]"
            >
              Your Message
            </label>
            <textarea
              id="description"
              rows="5"
              columns="10"
              value={mailData.message}
              className="p-4 border-[2px] border-[#b3b0b0] rounded-lg"
              onChange={(e) =>
                setMailData({ ...mailData, message: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center items-center gap-4 rounded-lg bg-[#331C52] px-4 py-2 cursor-pointer md:w-full">
            <img src={sendlogo} alt="sendIcon" className="w-6 h-6" />
            <button
              className="text-base md:text-2xl font-medium text-white"
              onClick={sendEmail}
            >
              Send
            </button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://www.instagram.com/modakcr7?igsh=Z3g2dnI1b3Z1cjd6"
              target="_blank"
            >
              <img
                src={instalogo}
                alt="instalogo"
                className="w-[4rem] border-[1px] border-[#331C52] rounded-full p-4 cursor-pointer"
              />
            </a>
            <a
              href="https://www.facebook.com/suman.modak.35?sfnsn=wiwspwa&mibextid=2JQ9oc"
              target="_blank"
            >
              <img
                src={fblogo}
                alt="fblogo"
                className="w-[4rem] border-[1px] border-[#331C52] rounded-full p-4 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/modak-suman" target="_blank">
              <img
                src={linkedinlogo}
                alt="linkedinglogo"
                className="w-[4rem] border-[1px] border-[#331C52] rounded-full p-4 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
