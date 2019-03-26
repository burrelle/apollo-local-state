import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Loading from './Loading';
import Error from './Error';
import Icon from './Icon';

const UnstyledList = styled.ul`
  list-style: none;
`;

const DateWithIcon = styled.li`
  display: flex;
  align-items: center;
`;

const DATE_FORMAT = 'MMMM Do YYYY, h:mm a';

export default function DateList({ loading, error, weather }) {
  return (
    <Fragment>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {weather && (
        <UnstyledList>
          {weather.map(({ dt, icon }, i) => (
            <DateWithIcon key={i}>
              {<Icon icon={icon} />}
              {moment.unix(dt).format(DATE_FORMAT)}
            </DateWithIcon>
          ))}
        </UnstyledList>
      )}
    </Fragment>
  );
}

DateList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  weather: PropTypes.array
};
