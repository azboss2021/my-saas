"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiComponent = ({ createdAt }: { createdAt: Date }) => {
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    setNewUser(createdAt && Date.now() - new Date(createdAt).getTime() <= 5000);
  }, [createdAt]);

  if (!newUser) return null;

  const width = 1920;
  const height = 1080;

  return newUser ? (
    <Confetti width={width} height={height} recycle={false} />
  ) : null;
};
export default ConfettiComponent;
