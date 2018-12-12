import { Math as VRMath,ReactInstance, Surface, Module} from 'react-360-web';

const cylinderSurface = new Surface(4096, 800, Surface.SurfaceShape.Cylinder);
const infoPanelControlButton = new Surface(200, 800, Surface.SurfaceShape.Flat);
const infoPanel = new Surface(1200, 620, Surface.SurfaceShape.Flat);

class SurfacesController extends Module {
  constructor() {
    super('SurfacesController');
  }
  displayInfoPanel(state) {
    infoPanel.setVisibility(state);
  }
  displayInfoPanelButton(state) {
    infoPanelControlButton.setVisibility(state);
  }
  //if cylinderSurface have size, if this positions it cannot click anything on flatsurface, 
  //so in scenes where flatsurfaces are interactive need to be resized to (0,0)
  disableCylinder() {
    cylinderSurface.resize(0, 0);
  }
  enableCylinder() {
    cylinderSurface.resize(4096, 800);
  }
}


function init(bundle, parent, options = {}) {
  const cameraDirection = [0, 0, -1];

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new SurfacesController()],
    frame: () => {
      const cameraQuat = r360.getCameraQuaternion();
      cameraDirection[0] = 0;
      cameraDirection[1] = 0;
      cameraDirection[2] = -1;
      VRMath.rotateByQuaternion(cameraDirection, cameraQuat);
      const cx = cameraDirection[0];
      const cy = cameraDirection[1];
      const cz = cameraDirection[2];
      const horizAngle = Math.atan2(cx, -cz);
      const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));
      infoPanelControlButton.setAngle(horizAngle, vertAngle);
      infoPanel.setAngle(horizAngle, vertAngle);
    },
    ...options,
  });

  r360.renderToSurface(r360.createRoot('images360Collection'), cylinderSurface);
  r360.renderToSurface(r360.createRoot('infoPanel'), infoPanel);
  r360.renderToSurface(r360.createRoot('infoPanelControlButton'), infoPanelControlButton);
  infoPanel.setVisibility(false);
}



window.React360 = {init};
