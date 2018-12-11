// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

const cylinderSurface = new Surface(4096, 720, Surface.SurfaceShape.Cylinder);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });
  
  r360.renderToSurface(r360.createRoot('amazingCracow'), cylinderSurface);
}



window.React360 = {init};
