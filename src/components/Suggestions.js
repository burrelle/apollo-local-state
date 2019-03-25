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
    weather @client {
      id
      applicable_date
    }
  }
`;

export default function Suggestions({ results, client }) {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = async woeid => {
    setClicked(false);
    const {
      data: { consolidated_weather }
    } = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
    const dataToWrite = [];
    consolidated_weather.map(item =>
      dataToWrite.push({ __typename: 'weather', ...item })
    );
    client.writeData({ data: { weather: dataToWrite } });
    setClicked(true);
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
          {({ data }) => <div>Query{console.log(data)}</div>}
        </Query>
      )}
    </Results>
  );
}
