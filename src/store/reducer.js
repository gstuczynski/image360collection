const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  if(action.type==="CHANGE_SCENE"){
    console.log('ddupa', action.sceneProps)
    return {
      counter: state.counter + 1
    }
  }
  return state;
}

export default reducer;