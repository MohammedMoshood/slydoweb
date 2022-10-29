import React , {useState} from "react";
import HeroSection from "../components/FrontPage/HeroSection";
import InfoSection from "../components/FrontPage/InfoSection";
import Navbar from "../components/Navbar";
import SectionA from "../components/FrontPage/SectionA";
import SectionB from "../components/FrontPage/SectionB";
import Footer from "../components/Footer";
import Sidebar from "../components/FrontPage/Sidebar";
import Navmenu from "../components/FrontPage/Navmenu";

const FrontPage = () => {

// Sidebar Submenu

  const [showsubmenu, setSubmenu] = useState(false);

  const openSubmenu = () => setSubmenu(true);

  const closeSubmenu = () => setSubmenu(false);

  //Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => 
  {
    setIsOpen(true);
  };
  const sidebarClose = () => 
  {
    setIsOpen(false)
    closeSubmenu()
  }

  // Navigation Subnav
  const [subnav, setSubnav] = useState(false);

  const openSubnav = () => {
    
    setSubnav(true)
  };

  const closeSubnav = () => {
    setSubnav(false)
  }
  

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Sidebar showsubmenu={showsubmenu} openSubmenu={openSubmenu} closeSubmenu={closeSubmenu} isOpen={isOpen} sidebarClose={sidebarClose}></Sidebar>
      <Navbar closeSubnav={closeSubnav} openSubnav={openSubnav} sidebarOpen={sidebarOpen}></Navbar>
      <HeroSection></HeroSection>
      <Navmenu closeSubnav={closeSubnav} location={location} subnav={subnav} ></Navmenu>
      <InfoSection></InfoSection>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <Footer></Footer>
    </main>
  );
};

export default FrontPage;
