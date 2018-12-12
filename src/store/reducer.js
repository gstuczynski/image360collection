import { NativeModules, Environment } from 'react-360';

const { SurfacesController } = NativeModules;

const initialState = {
  showCards: true,
  showControls: false,
  mainScene: true,
  isInfoPanelOpen: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "CHANGE_SCENE":
      SurfacesController.disableCylinder()
      const showControls = Boolean(action.sceneProps.content)
      return {
        ...action.sceneProps,
        showCards: false,
        showControls: showControls,
        mainScene: false
      }
    case "CHANGE_INFOPANEL_STATE":
      SurfacesController.displayInfoPanel(action.val)
      break;
    case "GOTO_MAINSCENE":
      Environment.setBackgroundImage();
      SurfacesController.enableCylinder()
    return {
      ...action.sceneProps,
      showCards: true,
      showControls: false,
      mainScene: true
    }
  }

  return state;
}

export default reducer;