import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ icon }) {
  return (
    <img alt={icon} src={`https://openweathermap.org/img/w/${icon}.png`} />
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};
