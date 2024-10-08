import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import Hero from "./Hero";
import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";


const HomePage = () => {
  const [navbar, setNavbar] = useState(false);
  const openNavbar = () => setNavbar(true);
  const closeNavbar = () => setNavbar(false);

  return (
    <div id="home">
      <Navbar openNavbar={openNavbar} />
      <NavbarMobile navbar={navbar} closeNavbar={closeNavbar} />
      {/* First Section */}
      <div id="home">
        <div className="relative">
          <Hero />
        </div>
        <div className="z-[30] relative" id="about">
          <About />
        </div>
        <div className="z-[30] relative" id="projects">
          <Projects/>
        </div>
        <div className="z-[10] relative mt-[5%]" id="projects">
          <Footer/>
        </div>
      </div>
      {/*About Section*/}
    </div>
  );
};

export default HomePage;
