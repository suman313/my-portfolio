import React, { useEffect, useRef } from "react";
import Slideformodal from "../Slideformodal";
import assetSection from "../../assets/assetTracker/AssetsSection.png";
import dashboard from "../../assets/assetTracker/assetTrackerDashboard.png";
import maintenance from "../../assets/assetTracker/maintenance.jpg";
import operators from "../../assets/assetTracker/operators.jpg";

import Sliderlayout from "../../utils/Sliderlayout";
function Assetmodal({ open, setModal }) {
  const allImgaes = [assetSection, dashboard, maintenance, operators];

  return (
    <Slideformodal openModal={open} setOpenModal={setModal}>
      <Sliderlayout allImgaes={allImgaes} />
    </Slideformodal>
  );
}

export default Assetmodal;
