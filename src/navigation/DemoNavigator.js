import React from 'react';
import { StackNavigator } from 'react-navigation';

import DemoHome from '../screens/DemoHome';
import CameraTest1 from '../screens/CameraTest/CameraTest1';
import VideoTest1 from '../screens/VideoTest/VideoTest1';

const DemoNavigator = StackNavigator(
  {
    Home: {
      screen: DemoHome
    },
    CameraTest1: {
      screen: CameraTest1
    },
    VideoTest1: {
      screen: VideoTest1
    }
  },
  { }
  );

export default DemoNavigator;