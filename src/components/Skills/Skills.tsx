import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkills from "../SoftwareSkills/SoftwareSkills";
import { illustration, skillsSection } from "../../config/strings";
import developerActivity from "../../assets/images/developerActivity.svg";
import { Fade } from "react-awesome-reveal";
import codingPerson from "../../assets/lottie/codingPerson.json";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

const Skills: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade triggerOnce direction="left" duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img alt="developer activity" src={developerActivity}></img>
            )}
          </div>
        </Fade>
        <Fade triggerOnce direction={"right"} duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkills />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
