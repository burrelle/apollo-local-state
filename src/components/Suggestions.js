import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Query } from 'react-apollo';
import { gql } from 'apollo-server-core';

const Results = styled.ul`
  list-style: none;
  padding: 1rem;
  background: whitesmoke;
  color: black;
  border-radius: 1rem;
`;

const Result = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const FORECAST_QUERY = gql`
  {
    consolidated_weather @client
  }
`;

export default function Suggestions({ results, client }) {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = woeid => {
    setClicked(false);
    axios.get(`https://www.metaweather.com/api/location/${woeid}/`).then(
      ({ data: { consolidated_weather } }) =>
        client.writeData({
          data: { consolidated_weather: { ...consolidated_weather } }
        }),
      setClicked(true)
    );
  };

  return (
    <Results>
      {results.map(({ title, woeid }) => (
        <Result key={woeid}>
          <button onClick={() => handleOnClick(woeid)}>{title}</button>
        </Result>
      ))}
      {clicked && (
        <Query query={FORECAST_QUERY}>
          {data => <div>Query{console.log(data)}</div>}
        </Query>
      )}
    </Results>
  );
}
