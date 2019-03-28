import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ message }) {
  return <div>{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string.isRequired
};
