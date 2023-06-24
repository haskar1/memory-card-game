import { useState } from "react";

export default function Scores() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <p className="current-score">
        Current Score: {currentScore}
      </p>
      <p className="best-score">
        Best Score: {bestScore}
      </p>
    </>
  )
}