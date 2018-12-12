import { Math as VRMath,ReactInstance, Surface} from 'react-360-web';

const cylinderSurface = new Surface(4096, 720, Surface.SurfaceShape.Cylinder);
const infoPanelControlButton = new Surface(200, 720, Surface.SurfaceShape.Flat);
const infoPanel = new Surface(1440, 850, Surface.SurfaceShape.Flat);


function init(bundle, parent, options = {}) {
  const cameraDirection = [0, 0, -1];

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
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

  r360.renderToSurface(r360.createRoot('infoPanelControlButton'), infoPanelControlButton);
  r360.renderToSurface(r360.createRoot('amazingCracow'), cylinderSurface);
  infoPanelControlButton.setVisibility(true)
}



window.React360 = {init};
