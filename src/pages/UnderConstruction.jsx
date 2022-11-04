import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import ErrorImage from "../images/UnderConstruct.svg";

const UnderConstruction = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Navbar />
      <div
        style={{
          width: "100%",
          maxWidth: "1680px",
          background: "white",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "84%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <img src={ErrorImage} alt="construction"></img>
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
            <h3>We are working an creating amazing experience just for you. Please check back later.</h3>
            <button
              style={{
                background: "#3F61DB",
                padding: "5px",
                width: "150px",
                outline: "none",
                border: "none",
                color: "white",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default UnderConstruction;
