export default function Feedback({
  value: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
    </>
  );
}
