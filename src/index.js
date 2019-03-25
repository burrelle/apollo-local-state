import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import Weather from './Weather';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {},
  addTypename: false
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Weather />
  </ApolloProvider>,
  document.getElementById('root')
);

cache.writeData({
  data: {
    weather: [
      {
        __typename: 'weather',
        id: 6675195802681344,
        weather_state_name: 'Light Cloud',
        weather_state_abbr: 'lc',
        wind_direction_compass: 'NNW',
        created: '2019-03-25T18:58:01.996736Z',
        applicable_date: '2019-03-25',
        min_temp: 3.74,
        max_temp: 13.245000000000001,
        the_temp: 12.73,
        wind_speed: 6.970100300771495,
        wind_direction: 343.1548132478394,
        air_pressure: 1031.9099999999999,
        humidity: 50,
        visibility: 10.151341167581325,
        predictability: 70
      }
    ]
  }
});
