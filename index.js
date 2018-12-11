import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import SceneManager from './src/components/SceneManager'

const amazingCracow = () => <SceneManager />
export default amazingCracow;

AppRegistry.registerComponent('amazingCracow', () => amazingCracow);
