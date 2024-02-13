import React from "react";
import home from "../../assets/altor/home.svg";
import riderProfile from "../../assets/altor/riderProfile.svg";
import eventFire from "../../assets/altor/rideStartEnd.svg";
import events from "../../assets/altor/events.svg";
import addRider from "../../assets/altor/addArider.svg";
import Slideformodal from "../Slideformodal";
import Sliderlayout from "../../utils/Sliderlayout";
function Altormodal({ open, setModal }) {
  const allImgaes = [home, riderProfile, eventFire, events, addRider];

  return (
    <Slideformodal openModal={open} setOpenModal={setModal}>
      <Sliderlayout allImgaes={allImgaes} />
    </Slideformodal>
  );
}

export default Altormodal;
