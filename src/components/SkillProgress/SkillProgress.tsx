import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../config/strings";
import { Bounce } from "react-awesome-reveal";
import skills from "../../assets/images/skill.svg";
import Build from "../../assets/lottie/build.json";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
import ProgressBar from "../ProgressBar/ProgressBar";

const SkillProgress: React.FC = () => {
  if (techStack.viewSkillBars) {
    return (
      <Bounce triggerOnce duration={1000}>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <ProgressBar width={progressStyle.width} />
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img alt="Skills" src={skills} />
            )}
          </div>
        </div>
      </Bounce>
    );
  }
  return null;
};

export default SkillProgress;
