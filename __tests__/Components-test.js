import 'react-native';
import React from 'react';

import { BackButton, FullYear, GenresList, InFullTime, MovieCard, ProductionCompany, SeeMoreButton } from '../src/components';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const backButton = renderer.create(<BackButton />).toJSON();
  expect(backButton).toMatchSnapshot();

  const fullYear = renderer.create(<FullYear />).toJSON();
  expect(fullYear).toMatchSnapshot();

  const genresList = renderer.create(<GenresList />).toJSON();
  expect(genresList).toMatchSnapshot();

  const inFullTime = renderer.create(<InFullTime />).toJSON();
  expect(inFullTime).toMatchSnapshot();

  const movieCard = renderer.create(<MovieCard />).toJSON();
  expect(movieCard).toMatchSnapshot();

  const productionCompany = renderer.create(<ProductionCompany />).toJSON();
  expect(productionCompany).toMatchSnapshot();

  const seeMoreButton = renderer.create(<SeeMoreButton />).toJSON();
  expect(seeMoreButton).toMatchSnapshot();
});
