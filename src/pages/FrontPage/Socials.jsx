import React from "react";
import Sidebar from "../../components/FrontPage/FrontPage/Sidebar";
import HeroSection from "../../components/FrontPage/Socials/HeroSection";
import Navbar from "../../components/Navbar";

const Socials = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Navbar />
      <Sidebar />
      <HeroSection/>
    </main>
  );
};

export default Socials;
