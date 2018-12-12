import React from 'react';
import { View, asset, Text, Image, VrButton } from 'react-360';
import { connect } from 'react-redux';


class InfoPanelControlButton extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <View style={{width: '200', height: '720'}}>
        <VrButton style={{width: '100', height: '50', bottom: -600,  backgroundColor: 'green' }} ><Text>
          Test
        </Text></VrButton>
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
      image: state.image,
      preview: state.preview,
      title: state.title,
      content: state.content,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeScene: (sceneProps) => dispatch({type: 'CHANGE_SCENE', sceneProps: sceneProps})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanelControlButton)

