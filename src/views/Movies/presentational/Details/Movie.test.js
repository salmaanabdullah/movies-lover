import React from 'react';
import { Map } from 'immutable';
import { shallow } from 'enzyme/build';
import { MemoryRouter } from 'react-router-dom';
import Movie from './Movie';

it('expect to render movie component', () => {
  expect(
    shallow(
      <MemoryRouter initialEntries={[{ pathname: '/movies/id', key: 'testKey' }]}>
        <Movie movie={new Map()} getMovieDetails={jest.fn()} resetDetails={jest.fn()} />
      </MemoryRouter>,
    ),
  ).toMatchSnapshot();
});
