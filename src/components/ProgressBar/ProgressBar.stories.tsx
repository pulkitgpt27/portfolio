import React from "react";
import ProgressBar from "./ProgressBar";
export default {
  title: "ProgressBar"
};

export const Default = () => {
  return (
    <>
      <ProgressBar width={"90%"} />
      <ProgressBar width={"50%"} />
    </>
  );
};
