import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};
