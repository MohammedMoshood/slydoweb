import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/FrontPage/Chat/HeroSection";
import InfoSection from "../../components/FrontPage/Chat/InfoSection";
import SectionB from "../../components/FrontPage/FrontPage/SectionB";
import Sidebar from "../../components/FrontPage/FrontPage/Sidebar";
import Navbar from "../../components/Navbar";

const Chat = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Navbar />
      <Sidebar />
      <HeroSection/>
      <InfoSection/>
      <SectionB />
      <Footer />
    </main>
  );
};

export default Chat;
