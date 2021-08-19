import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <div
      className={
        isDark
          ? "dark-toggle toggle-switch-container"
          : "toggle-switch-container"
      }
    >
      <i className="themeIcon fas fa-adjust"></i>
      <label className="switch">
        <input
          type="checkbox"
          id="themeSwitch"
          checked={isDark}
          onChange={() => {
            styleContext.changeTheme && styleContext.changeTheme();
            setChecked(!isChecked);
          }}
        />
        <>
          <span className="slider round"></span>
        </>
      </label>
    </div>
  );
};
export default ToggleSwitch;
