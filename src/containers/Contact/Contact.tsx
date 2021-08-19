import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { illustration, contactInfo } from "../../config/strings";
import { Fade } from "react-awesome-reveal";
import contact from "../../assets/images/contactMailDark.svg";
import email from "../../assets/lottie/email.json";
import Button from "../../components/Button/Button";
import DisplayLottie from "../../components/DisplayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

const Contact: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="down" duration={1000}>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <div className="contact-flex">
                <Button
                  text="Click To Call"
                  href={"tel:" + contactInfo.number}
                  newTab
                />
                <div className="contact-detail">{contactInfo.number}</div>
              </div>
              <br />
              <br />
              <div className="contact-flex">
                <Button
                  text="Click To Mail"
                  href={"mailto:" + contactInfo.email_address}
                  newTab
                />
                <div className="contact-detail">
                  {contactInfo.email_address}
                </div>
              </div>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img alt="contact" src={contact}></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Contact;
