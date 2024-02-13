import React from "react";
import Slideformodal from "../Slideformodal";
import Sliderlayout from "../../utils/Sliderlayout";
import home from "../../assets/ChatE2EE/home.svg";
function Chate2eemodal({ open, setModal }) {
  const allImgaes = [home];

  return (
    <Slideformodal openModal={open} setOpenModal={setModal}>
      <Sliderlayout allImgaes={allImgaes} />
    </Slideformodal>
  );
}

export default Chate2eemodal;
