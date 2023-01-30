import React, { useState } from 'react';

import { Statistics } from 'components/statistics/statistics';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';

export const PageFeedback = () => {
  const [objFB, setObjFb] = useState({ good: 0, neutral: 0, bad: 0 });

  const handlFeedback = option => {
    if (option) {
      setObjFb(prevState => ({ ...objFB, [option]: prevState[option] + 1 }));
    }
  };

  const countTotalFeedback = () => {
    const res = Object.values(objFB).reduce((cur, acc) => acc + cur, 0);
    return res;
  };

  const countPositiveFeedbackPercentage = () =>
    Math.floor((objFB.good * 100) / countTotalFeedback());

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={objFB} onLeaveFeedback={handlFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            obj={objFB}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </div>
  );
};
