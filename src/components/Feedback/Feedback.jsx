export default function Feedback({
  value: { good, neutral, bad },
  percPositive,
}) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {percPositive}%</p>
    </>
  );
}
