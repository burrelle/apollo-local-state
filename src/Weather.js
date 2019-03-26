import React, { useEffect } from 'react';
import axios from 'axios';
import DateList from './components/DateList';
import { DATE_TIME_ICON_QUERY } from './queries';
import { useQuery, useApolloClient } from 'react-apollo-hooks';

async function fetchData(client) {
  const {
    data: { list }
  } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=${
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
  const {
    data: { weather },
    loading,
    error
  } = useQuery(DATE_TIME_ICON_QUERY);

  useEffect(() => {
    fetchData(client);
  }, []);

  return <DateList weather={weather} loading={loading} error={error} />;
}
