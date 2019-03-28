import React from 'react';

export default function Icon({ icon }: { icon: string }) {
  return (
    <img alt={icon} src={`https://openweathermap.org/img/w/${icon}.png`} />
  );
}
