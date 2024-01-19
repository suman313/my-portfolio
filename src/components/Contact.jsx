import React, { useState } from "react";

function Contact() {
  const [mailData, setMailData] = useState({});

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
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[#1d1c1c] text-white">
      <p className="text-[2rem] mb-4">Contact Me</p>
      <div className="flex flex-col gap-5 justify-center items-start">
        <label>Your Name</label>
        <input
          type="text"
          placeholder="your name"
          className="border-[2px] p-2 rounded-md w-full"
          onChange={(e) => setMailData({ ...mailData, name: e.target.value })}
        />
        <label>Email Id</label>
        <input
          type="text"
          placeholder="email id"
          className="border-[2px] p-2 rounded-md w-full"
          onChange={(e) => setMailData({ ...mailData, email: e.target.value })}
        />
        <label>Phone no.</label>
        <input
          type="text"
          placeholder="phone no."
          className="border-[2px] p-2 rounded-md w-full"
          onChange={(e) =>
            setMailData({ ...mailData, phone_no: e.target.value })
          }
        />
        <label>How can I help you?</label>
        <textarea
          className="border-[2px] p-2 rounded-md"
          onChange={(e) =>
            setMailData({ ...mailData, message: e.target.value })
          }
          rows="4"
          cols="50"
        ></textarea>
        <button
          className="p-2 bg-[#d03f3f] rounded-md w-[80px] text-white"
          onClick={sendEmail}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
