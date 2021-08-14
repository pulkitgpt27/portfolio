import React, { Suspense } from "react";
import Lottie from "react-lottie";
import Loading from "../Loading/Loading";

interface DisplayLottieProps {
  animationData: any;
}
const DisplayLottie: React.FC<DisplayLottieProps> = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData
  };

  return (
    <Suspense fallback={<Loading />}>
      <Lottie options={defaultOptions} isClickToPauseDisabled />
    </Suspense>
  );
};

export default DisplayLottie;
