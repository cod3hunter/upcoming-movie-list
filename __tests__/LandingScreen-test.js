import 'react-native';
import React from 'react';

import { HomeScreen } from '../src/screens';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const landing = renderer.create(<HomeScreen />).toJSON();
  expect(landing).toMatchSnapshot();
});
