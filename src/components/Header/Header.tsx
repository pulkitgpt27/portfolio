import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import Typewriter from "typewriter-effect";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  educationInfo,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../config/strings";

const Header: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewEducation = educationInfo.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const [count, setCount] = React.useState(0);

  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <Headroom key={`${count}`}>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">
            <Typewriter
              options={{
                strings: [
                  "Pulkit Gupta",
                  "Front End Developer",
                  "Backend Developer",
                  "Software Engineer"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li onClick={onClick}>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li onClick={onClick}>
              <a href="#experience">Work</a>
            </li>
          )}
          {viewOpenSource && (
            <li onClick={onClick}>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewEducation && (
            <li onClick={onClick}>
              <a href="#education">Education</a>
            </li>
          )}
          {viewAchievement && (
            <li onClick={onClick}>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li onClick={onClick}>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li onClick={onClick}>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li onClick={onClick}>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};

export default Header;
