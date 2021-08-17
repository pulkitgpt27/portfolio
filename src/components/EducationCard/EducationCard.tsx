import React, { createRef, useContext } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

interface schoolType {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc?: string;
  descBullets: Array<string>;
}
interface EducationCardProps {
  school: schoolType;
}

const EducationCard: React.FC<EducationCardProps> = ({ school }) => {
  const imgRef: React.RefObject<HTMLImageElement> = createRef();
  const getDescBullets = (descBullets: Array<string>) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li key={i} className="subTitle">
          {item}
        </li>
      ))
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <Fade triggerOnce direction="left" duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>{getDescBullets(school.descBullets)}</ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide triggerOnce direction="left" duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
};

export default EducationCard;
