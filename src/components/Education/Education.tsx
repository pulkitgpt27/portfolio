import React from "react";
import "./Education.scss";
import EducationCard from "../EducationCard/EducationCard";
import { educationInfo } from "../../config/strings";

const Education: React.FC = () => {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default Education;
