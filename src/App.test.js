import React from 'react';
import { shallow } from 'enzyme/build';
import App from './App';

it('mounts App without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount();
});

it('expect to render app component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
