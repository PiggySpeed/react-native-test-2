import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DemoNavigator from './DemoNavigator';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';


const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: DemoNavigator,
      navigationOptions: {
        header: null
      }
    },
    Screen1: {
      screen: MainTabNavigator,
    },
    Screen2: {
      screen: Screen2
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default RootStackNavigator;
