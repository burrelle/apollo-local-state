import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import DateList from './components/DateList';
import { useApolloClient } from 'react-apollo-hooks';
import Form from './components/Form';

async function fetchData(city, client) {
  const {
    data: { list }
  } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},UK&appid=${
      process.env.REACT_APP_APIKEY
    }`
  );
  const toGraphQL = list.map(({ weather, main, dt }, i) => ({
    __typename: `forecast_item_${i}`,
    dt,
    ...weather[0],
    ...main
  }));
  client.writeData({ data: { weather: toGraphQL } });
}

export default function Weather() {
  const client = useApolloClient();
  const [city, setCity] = useState('London');

  useEffect(() => {
    fetchData(city, client);
  }, []);

  return (
    <Fragment>
      <Form value={city} setValue={setCity} refetch={fetchData} client={client} />
      <DateList />
    </Fragment>
  );
}
