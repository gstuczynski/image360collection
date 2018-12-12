import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SceneManager from './src/components/SceneManager';
import reducer from './src/store/reducer'
import InfoPanelControlButton from './src/components/infoPanelControlButton'


const store = createStore(reducer);

const amazingCracow = () => <Provider store={store} ><SceneManager /></Provider>
const infoPanelControlButtonWithStore = () => <Provider store={store} ><InfoPanelControlButton /></Provider>
export default amazingCracow;

AppRegistry.registerComponent('amazingCracow', () => amazingCracow);
AppRegistry.registerComponent('infoPanelControlButton', () => infoPanelControlButtonWithStore );

