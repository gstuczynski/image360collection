import React from 'react';
import {
  AppRegistry,
} from 'react-360';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SceneManager from './src/components/SceneManager';
import reducer from './src/store/reducer'
import InfoPanelControlButton from './src/components/InfoPanelControlButton'
import InfoPanel from './src/components/InfoPanel'


const store = createStore(reducer);

const images360Collection = () => <Provider store={store} ><SceneManager /></Provider>
const infoPanelControlButtonWithStore = () => <Provider store={store} ><InfoPanelControlButton /></Provider>
const infoPanelWithStore = () => <Provider store={store} ><InfoPanel /></Provider>

export default images360Collection;

AppRegistry.registerComponent('images360Collection', () => images360Collection);
AppRegistry.registerComponent('infoPanelControlButton', () => infoPanelControlButtonWithStore );
AppRegistry.registerComponent('infoPanel', () => infoPanelWithStore );

