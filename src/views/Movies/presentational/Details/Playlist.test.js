import React from 'react';
import { shallow } from 'enzyme';
import Playlist from './Playlist';

it('expect to render movie component', () => {
  expect(shallow(<Playlist />)).toMatchSnapshot();
});
