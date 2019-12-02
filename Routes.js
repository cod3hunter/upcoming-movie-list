import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen, MovieDetailsScreen } from './src/screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    MovieDetails: {
      screen: MovieDetailsScreen,
    }
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);