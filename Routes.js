import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from './src/screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);