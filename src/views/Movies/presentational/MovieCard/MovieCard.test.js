import React from 'react';
import { shallow } from 'enzyme/build';
import { Map } from 'immutable';
import { MemoryRouter } from 'react-router-dom';
import MovieCard from './MovieCard';

it('expect to render movie component', () => {
  expect(
    shallow(
      <MemoryRouter initialEntries={[{ pathname: '/movies/id', key: 'testKey' }]}>
        <MovieCard movie={new Map()} />
      </MemoryRouter>,
    ),
  ).toMatchSnapshot();
});
