import React from 'react';

export default function Input({ value, setValue }) {
  return <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>;
}
