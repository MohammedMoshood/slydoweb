import React , {useState} from "react";
import HeroSection from "../components/FrontPage/HeroSection";
import InfoSection from "../components/FrontPage/InfoSection";
import Navbar from "../components/Navbar";
import SectionA from "../components/FrontPage/SectionA";
import SectionB from "../components/FrontPage/SectionB";
import Footer from "../components/Footer";
import Sidebar from "../components/FrontPage/Sidebar";

const FrontPage = () => {
  const [showsubmenu, setSubmenu] = useState(false);

  const openSubmenu = () => setSubmenu(true);

  const closeSubmenu = () => setSubmenu(false);

  
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
  

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Sidebar showsubmenu={showsubmenu} openSubmenu={openSubmenu} closeSubmenu={closeSubmenu} isOpen={isOpen} sidebarClose={sidebarClose}></Sidebar>
      <Navbar sidebarOpen={sidebarOpen}></Navbar>
      <HeroSection></HeroSection>
      <InfoSection></InfoSection>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <Footer></Footer>
    </main>
  );
};

export default FrontPage;
