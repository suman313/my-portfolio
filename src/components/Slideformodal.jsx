import React from "react";

function Slideformodal({ openModal, setOpenModal, children }) {
  return (
    <div>
      <div className="fixed  z-[700] top-0  left-0 bottom-0 right-0 backdrop-blur-md   flex justify-center items-center ">
        <span
          className="absolute top-5 right-10 w-6 pr-16 text-white text-xl font-bold cursor-pointer"
          onClick={() => setOpenModal(false)}
        >
          close
        </span>
        <div className="w-[70vw] h-fit">{children}</div>
      </div>
    </div>
  );
}

export default Slideformodal;
