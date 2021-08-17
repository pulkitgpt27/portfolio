import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { workExperiences } from "../../config/strings";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

const WorkExperience: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade triggerOnce direction="right" duration={1000}>
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        rgbColor: card.rgbColor,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
};

export default WorkExperience;
