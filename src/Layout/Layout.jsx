import React, { useEffect, useState } from "react";
import "./layout.css";
import hamburgerIcon from "../assets/hamburgerMenu.svg";
import crossIcon from "../assets/crossIcon.svg";
import logo from "../assets/logo.svg";
function Layout({ children }) {
  const [hamburMenuState, setHamburMenuState] = useState(false);

  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 0);
  });
  const scrollToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const scrollToProjects = () => {
    let section = document.getElementById("section-asset");
    section.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    let section = document.getElementById("section-about");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="hidden top-0 left-0 md:flex justify-between items-center w-full p-5 transition z-[999]">
        <img src={logo} alt="logo" className="w-[70px] h-[30px] ml-10" />
        <ul className="flex justify-end w-full gap-8 pr-5">
          <li>
            <button onClick={scrollToTop}>Home</button>
          </li>
          <li>
            <button onClick={scrollToProjects}>Projects</button>
          </li>
          <li>
            <button onClick={scrollToAbout}>About</button>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
      <nav className=" md:hidden">
        <img src={logo} alt="logo" className="w-[50px] h-[50px] p-2 ml-5" />
        <img
          src={hamburMenuState ? crossIcon : hamburgerIcon}
          alt="hamburgerIcon"
          className="absolute top-0 right-0 w-10 h-10"
          onClick={() => setHamburMenuState((prev) => !prev)}
        />
        <div
          className={`${
            hamburMenuState == false && "hidden"
          } absolute top-16 right-2 bg-[#3a3939] p-2 rounded-md`}
        >
          <ul className="flex flex-col justify-center items-center gap-4 w-[120px] text-white">
            <li>
              <button onClick={scrollToTop}>Home</button>
            </li>
            <li>
              <button onClick={scrollToProjects}>Projects</button>
            </li>
            <li>
              <button onClick={scrollToAbout}>About</button>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <main className="mt-24">{children}</main>
    </>
  );
}

export default Layout;
