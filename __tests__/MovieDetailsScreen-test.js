import 'react-native';
import React from 'react';

import { MovieDetailsScreen } from '../src/screens';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const movieDetails = renderer.create(<MovieDetailsScreen />).toJSON();
  expect(movieDetails).toMatchSnapshot();
});
