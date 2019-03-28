import { gql } from 'apollo-server-core';

export const DATE_TIME_ICON_QUERY = gql`
  {
    weather @client {
      dt
      icon
    }
  }
`;
