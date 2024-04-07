import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedbacks !== null) return savedFeedbacks;

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const percPositive = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          value={feedback}
          totalFeedback={totalFeedback}
          percPositive={percPositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
