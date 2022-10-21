import React from "react";
import HeroSection from "../components/FrontPage/HeroSection";
import InfoSection from "../components/FrontPage/InfoSection";
import Navbar from "../components/Navbar";
import SectionA from "../components/FrontPage/SectionA";
import SectionB from "../components/FrontPage/SectionB";
import Footer from "../components/Footer";
import DownloadModal from "../components/FrontPage/DownloadModal";

const FrontPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModalTrue = () => {
    setShowModal(false);
    //set to true for Modal to work properly setShowModal(true)
  };
  const toggleModalFalse = () => {
    setShowModal(false);
  };
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {showModal && <DownloadModal showModal={showModal} toggleModalFalse={toggleModalFalse}></DownloadModal>}

      <Navbar showModal={showModal} toggleModalTrue={toggleModalTrue}></Navbar>
      <HeroSection></HeroSection>
      <InfoSection></InfoSection>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <Footer></Footer>
    </main>
  );
};

export default FrontPage;
