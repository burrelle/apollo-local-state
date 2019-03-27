import React from 'react';
import Input from './Input';
import SubmitButton from './SubmitButton';

function handleSubmit(e, fetchData, value, client) {
  e.preventDefault();
  fetchData(value, client);
}

export default function Form(props) {
  return (
    <form
      onSubmit={e => handleSubmit(e, props.refetch, props.value, props.client)}
    >
      <Input {...props} />
      <SubmitButton {...props} />
    </form>
  );
}
