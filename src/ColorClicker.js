import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const COLOR_QUERY = gql`
  {
    color @client
  }
`;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const colors = ['red', 'goldenrod', 'green', 'purple'];

export default function ColorClicker({ client }) {
  const {
    data: { color }
  } = useQuery(COLOR_QUERY);

  return (
    <div>
      <span
        onClick={() =>
          client.writeData({ data: { color: colors[getRandomInt(4)] } })
        }
        style={{ color: color, cursor: 'pointer' }}
      >
        Color: {color}
      </span>
    </div>
  );
}
