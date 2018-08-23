import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { number } = props;
  return (
    <p>{number}</p>
  );
}

Display.defaultProps = {
  number: 0,
};

Display.propTypes = {
  number: PropTypes.number,
};

export default Display;
