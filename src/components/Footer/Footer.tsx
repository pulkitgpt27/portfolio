import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

const Footer: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        © 2021 - Designed and Developed by Pulkit Gupta
      </p>
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}></p>
    </div>
  );
};

export default Footer;
