import React from "react";
import BetaLogoIcon from "../../images/beta-icon.png";
import LogoDark2x from "../../images/beta-icon.png";
import LogoSmall from "../../images/beta-icon.png";
import {Link} from "react-router-dom";

const BetaLogo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      {/* <img className="logo-light logo-img" src={BetaLogoIcon} alt="logo" /> */}
      <img className="logo-dark logo-img" src={LogoDark2x} alt="logo" />
      {/* <img className="logo-small logo-img logo-img-small" src={LogoSmall} alt="logo" /> */}
    </Link>
  );
};

export default BetaLogo;
