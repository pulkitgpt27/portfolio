import React, { createRef } from "react";
import "./ExperienceCard.scss";

interface CardInfoType {
  company: string;
  desc: string;
  date: string;
  companylogo: string;
  role: string;
  rgbColor?: Array<string>;
  descBullets?: Array<string>;
}
interface ExperienceCardType {
  cardInfo: CardInfoType;
  isDark: boolean;
}
const ExperienceCard: React.FC<ExperienceCardType> = ({ cardInfo, isDark }) => {
  const imgRef: React.RefObject<HTMLImageElement> = createRef();

  function rgb(values?: Array<string>) {
    return typeof values === "undefined"
      ? ""
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = (
    descBullets: Array<string> | undefined,
    isDark: boolean
  ) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{ background: rgb(cardInfo.rgbColor) }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>{GetDescBullets(cardInfo.descBullets, isDark)}</ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
