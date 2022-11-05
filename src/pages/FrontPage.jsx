import React, { useState } from "react";
import HeroSection from "../components/FrontPage/HeroSection";
import InfoSection from "../components/FrontPage/InfoSection";
import Navbar from "../components/Navbar";
import SectionA from "../components/FrontPage/SectionA";
import SectionB from "../components/FrontPage/SectionB";
import Footer from "../components/Footer";
import Sidebar from "../components/FrontPage/Sidebar";


const FrontPage = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <InfoSection></InfoSection>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <Footer></Footer>
    </main>
  );
};

export default FrontPage;
