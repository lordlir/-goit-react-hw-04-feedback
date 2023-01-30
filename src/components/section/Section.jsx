import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
};
