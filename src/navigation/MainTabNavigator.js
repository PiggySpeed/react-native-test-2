import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const IS_IOS = Platform.OS === 'ios';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);
