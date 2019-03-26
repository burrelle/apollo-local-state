import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Weather from './Weather';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {}
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Weather />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
