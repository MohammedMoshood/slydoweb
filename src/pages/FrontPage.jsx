import React, { useState } from "react";
import HeroSection from "../components/FrontPage/HeroSection";
import InfoSection from "../components/FrontPage/InfoSection";
import Navbar from "../components/Navbar";
import SectionA from "../components/FrontPage/SectionA";
import SectionB from "../components/FrontPage/SectionB";
import Footer from "../components/Footer";
import Sidebar from "../components/FrontPage/Sidebar";
import Navmenu from "../components/FrontPage/Navmenu";
import UserDropdown from "../components/FrontPage/UserDropdown";

const FrontPage = () => {
  // Sidebar Submenu

  const [showsubmenu, setSubmenu] = useState(false);

  const openSubmenu = () => setSubmenu(true);

  const closeSubmenu = () => setSubmenu(false);

  //Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(true);
    setIsDropdown(false);
  };
  const sidebarClose = () => {
    setIsOpen(false);
    closeSubmenu();
    setIsMenuDropdown(false);
  };

  // Navigation Subnav
  const [subnav, setSubnav] = useState(false);

  const openSubnav = () => {
    setSubnav(true);
  };

  const closeSubnav = () => {
    setSubnav(false);
  };

  //UserDropdown

  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  // Submenu UserDropdown
  const [isMenuDropdown, setIsMenuDropdown] = useState(false);
  const toggleMenuDropdown = () => {
    setIsMenuDropdown(!isMenuDropdown);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Sidebar
        isDropdown={isMenuDropdown}
        toggleMenuDropdown={toggleMenuDropdown}
        showsubmenu={showsubmenu}
        openSubmenu={openSubmenu}
        closeSubmenu={closeSubmenu}
        isOpen={isOpen}
        sidebarClose={sidebarClose}
      ></Sidebar>

      
      <Navbar toggleDropdown={toggleDropdown} openSubnav={openSubnav} sidebarOpen={sidebarOpen}></Navbar>
      <HeroSection isDropdown={isDropdown}></HeroSection>
      <Navmenu closeSubnav={closeSubnav} location={location} subnav={subnav}></Navmenu>
      <InfoSection></InfoSection>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <Footer></Footer>
    </main>
  );
};

export default FrontPage;
