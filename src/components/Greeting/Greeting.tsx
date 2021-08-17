import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson.json";
import manOnTable from "../../assets/images/manOnTable.svg";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Button from "../Button/Button";
import { illustration, greeting } from "../../config/strings";
import StyleContext from "../../contexts/StyleContext";

const Greeting: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade triggerOnce duration={1000}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title} <span className="wave-emoji">{"👋"}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img alt="man sitting on table" src={manOnTable} />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Greeting;
