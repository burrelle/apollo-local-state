import React from 'react';

export default function Error({ error }: { error: string }) {
  return <div>{error}</div>;
}
