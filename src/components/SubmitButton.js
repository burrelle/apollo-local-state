import React from 'react';

export default function SubmitButton({ value, setValue }) {
  return <button type="submit" onClick={() => setValue(value) }>Search</button>;
}
