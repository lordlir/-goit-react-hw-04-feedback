import { StatisticItem } from 'components/statistic-Item/StatisticItem';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const Statistics = ({ obj, total, positivePercentage }) => {
  return (
    <div>
      {Object.keys(obj).map(el => {
        return <StatisticItem obj={obj} el={el} key={uuidv4()} />;
      })}

      <p className="text" key={uuidv4()}>
        Total:
        <span className="count">{total()}</span>
      </p>

      <p className="text" key={uuidv4()}>
        Positive feedback:
        <span className="count">{positivePercentage() || 0}%</span>
      </p>
    </div>
  );
};

Statistics.propType = {
  obj: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
