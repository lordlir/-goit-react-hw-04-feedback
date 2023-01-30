import { capitalize } from 'components/capitalize';

import PropTypes from 'prop-types';

export const StatisticItem = ({ obj, el }) => {
  return (
    <p className="text">
      {capitalize(el)}:<span className="count">{obj[el]}</span>
    </p>
  );
};

StatisticItem.propTypes = {
  obj: PropTypes.object.isRequired,
  el: PropTypes.string.isRequired,
};
