import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, text } = props;
  return (
    <button type="button" onClick={onClick}>{text}</button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  text: 'unnamed',
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
