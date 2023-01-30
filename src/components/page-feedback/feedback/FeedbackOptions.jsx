import { capitalize } from 'components/capitalize';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnBox}>
      {Object.keys(options).map(keys => {
        return (
          <button
            key={uuidv4()}
            className={s.btn}
            type="button"
            onClick={() => onLeaveFeedback(keys)}
          >
            {capitalize(keys)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
