import React from "react";

function Slideformodal({ openModal, setOpenModal, children }) {
  return (
    <div>
      <div className="fixed  z-[700] top-0  left-0 bottom-0 right-0 backdrop-blur-sm   flex justify-center items-center ">
        <div className="mx-16">{children}</div>
      </div>
    </div>
  );
}

export default Slideformodal;
