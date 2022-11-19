import React, { useState } from "react";
import HeroSection from "../components/FrontPage/FrontPage/HeroSection";
import InfoSection from "../components/FrontPage/FrontPage/InfoSection";
import Navbar from "../components/Navbar";
import SectionA from "../components/FrontPage/FrontPage/SectionA";
import SectionB from "../components/FrontPage/FrontPage/SectionB";
import Footer from "../components/Footer";
import Sidebar from "../components/FrontPage/FrontPage/Sidebar";


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
