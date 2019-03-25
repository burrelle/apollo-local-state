import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Suggestions from './Suggestions';
import { ApolloConsumer } from 'react-apollo';

const Input = styled.input`
  width: 28rem;
  padding: 0.5rem;
  border-style: none;
  outline: none;
  margin-left: 0.25rem;
  font-size: 1rem;
  border-radius: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  padding: 0 1rem;
  border-radius: 1rem;
  background: white;
`;

export default function Search() {
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://www.metaweather.com/api/location/search/?query=${query}`)
      .then(({ data }) => {
        setSearchable(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const getInfo = wordToMatch => {
    return searchable.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.title.match(regex);
    });
  };

  useEffect(() => {
    query && query.length >= 1 ? setResults(getInfo(query)) : setResults([]);
  }, [query]);

  return (
    <div>
      <Form>
        <Input
          type="text"
          placeholder="Search for..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Form>
      {results.length > 0 && (
        <ApolloConsumer>
          {client => <Suggestions results={results} client={client} />}
        </ApolloConsumer>
      )}
    </div>
  );
}
