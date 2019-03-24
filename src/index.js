import React from 'react';
import ReactDOM from 'react-dom';
import ColorClicker from './ColorClicker';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers: {}
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <ColorClicker client={client} />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

cache.writeData({
  data: {
    color: 'blue'
  }
});
