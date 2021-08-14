import * as React from "react";

import "./ProgressBar.scss";

interface ProgressBarProps {
  width: string;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  const [value, setValue] = React.useState("0%");

  React.useEffect(() => {
    setValue(width);
  });

  return (
    <div className="meter" style={{ width: "100%" }}>
      <span style={{ width: `${value}` }} className="progress" />
    </div>
  );
};

export default ProgressBar;
