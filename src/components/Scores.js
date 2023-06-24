export default function Scores({ currentScore, bestScore }) {
  return (
    <div className="scores">
      <p className="current-score">
        Current Score: {currentScore}
      </p>
      <p className="best-score">
        Best Score: {bestScore}
      </p>
    </div>
  )
}