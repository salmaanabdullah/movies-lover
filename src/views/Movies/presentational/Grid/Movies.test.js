import React from 'react';
import { List } from 'immutable';
import { shallow } from 'enzyme';
import Movies from './Movies';

it('expect to render movies component', () => {
  expect(shallow(<Movies movies={new List()} getMovies={jest.fn()}></Movies>)).toMatchSnapshot();
});
