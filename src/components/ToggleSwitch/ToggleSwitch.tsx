import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme && styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round" />
    </label>
  );
};
export default ToggleSwitch;