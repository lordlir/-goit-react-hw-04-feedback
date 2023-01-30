import React, { Component } from 'react';

import { Statistics } from 'components/statistics/statistics';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Section } from 'components/section/Section';
import { Notification } from 'components/notification/Notification';

export class PageFeedback extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = option => {
    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };

  countTotalFeedback = () => {
    const res = Object.values(this.state).reduce((cur, acc) => acc + cur, 0);
    return res;
  };

  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const total = this.countTotalFeedback;
    const percentage = this.countPositiveFeedbackPercentage;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleOnClick}
          />
        </Section>
        <Section title="Statistics">
          {total() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              obj={this.state}
              total={total}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
