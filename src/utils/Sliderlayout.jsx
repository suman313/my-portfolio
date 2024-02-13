import React, { useEffect, useRef } from "react";
import "./modal.css";
function Sliderlayout({ allImgaes }) {
  const imgContainerRef = useRef(null);
  const backBtnRef = useRef();
  const forwardBtnRef = useRef();
  const onSlideChange = (direction) => {
    console.log(direction);
    const slideDirection = direction === "previous" ? -1 : 1;
    const scrollAmount = imgContainerRef.current.clientWidth * slideDirection;
    imgContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const hideArrowKey = () => {
    const leftScrollAmount = imgContainerRef.current.scrollLeft;
    backBtnRef.current.style.display = leftScrollAmount > 0 ? "flex" : "none";
    forwardBtnRef.current.style.display =
      leftScrollAmount >=
      imgContainerRef.current.scrollWidth -
        (imgContainerRef.current.clientWidth +
          imgContainerRef.current.clientWidth / 2)
        ? "none"
        : "flex";
    slideThumbRef.current.style.width =
      imgContainerRef.current.clientWidth /
        (imgContainerRef.current.scrollWidth /
          imgContainerRef.current.clientWidth) +
      "px";
    slideThumbRef.current.style.left =
      imgContainerRef.current.scrollLeft /
        (imgContainerRef.current.scrollWidth /
          imgContainerRef.current.clientWidth) +
      "px";
  };

  useEffect(() => {
    imgContainerRef.current.addEventListener("scroll", hideArrowKey);
  }, []);
  return (
    <div className="relative">
      <div
        id="slide-prev"
        ref={backBtnRef}
        onClick={() => onSlideChange("previous")}
        className="absolute hidden  items-center justify-center  bg-slate-700 p-2 bottom-9 left-[40%] rounded-[50%] cursor-pointer"
      >
        <span className="material-symbols-outlined text-white">
          arrow_back_ios
        </span>
      </div>
      <div
        id="slide-next"
        ref={forwardBtnRef}
        onClick={() => onSlideChange("next")}
        className="absolute flex items-center justify-center slide-next bg-slate-700 p-2 bottom-9 left-[50%] rounded-[50%] cursor-pointer"
      >
        <span class="material-symbols-outlined text-white">
          arrow_forward_ios
        </span>
      </div>
      <div
        id="img-container"
        ref={imgContainerRef}
        className="asset-container flex my-[10rem] "
      >
        {allImgaes.map((item) => (
          <img src={item} className="w-auto h-[40rem] px-16" />
        ))}
      </div>
    </div>
  );
}

export default Sliderlayout;
