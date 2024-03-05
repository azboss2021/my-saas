"use client";

import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { innerWidth, innerHeight } = window;

  return <Confetti width={innerWidth} height={innerHeight} recycle={false} />;
};
export default ConfettiComponent;
