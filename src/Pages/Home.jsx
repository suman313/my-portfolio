import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import HeroSection from "../components/HeroSection";
import Experience from "../components/Experience";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
function Home() {
  return (
    <Layout>
      <section>
        <HeroSection />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export default Home;
