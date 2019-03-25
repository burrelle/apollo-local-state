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
