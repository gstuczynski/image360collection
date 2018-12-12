import React from 'react';
import { View, asset, Text, Image, VrButton } from 'react-360';
import { connect } from 'react-redux';

const style = {
  infoButton: {
    width: 80, 
    height: 80, 
    bottom: 0, 
    position: 'absolute'
  },
  returnButton: {
    width: 80, 
    height: 80, 
    bottom: 0, 
    position: 'absolute',
  }
}

class InfoPanelControlButton extends React.Component {
  constructor(){
    super()
    this.state = {
      isInfoPanelOpen: false
    }
  }
  handleInfoClick = () => {
    const isInfoPanelOpen = !this.state.isInfoPanelOpen
    this.setState({
      isInfoPanelOpen: isInfoPanelOpen
    })
    this.props.openInfoPanel(isInfoPanelOpen)
  }

  handleReturnClick = () => {
    this.props.goToMainScene()
  }

  render(){

    const infoPanelControl = this.state.isInfoPanelOpen ? 
    <Image style={style.infoButton} source={asset('icons/iconfinder_close_32391.png')} /> :
    <Image style={style.infoButton} source={asset('icons/iconfinder_info-blog_46810.png')} />

    const returnButton = <Image style={style.infoButton} source={asset('icons/iconfinder_Arrow_doodle_16_3847918.png')} />
    
    return(    
      <View style={{display: 'flex', position: 'relative', width: 500, height: 800}}>
      { this.props.showControls  &&
        <VrButton style={{position: 'absolute', bottom: 0,  right: 500}}  onClick={()=>this.handleInfoClick()} >
          {infoPanelControl}
        </VrButton>}
{   !this.props.mainScene  &&    <VrButton style={{position: 'absolute', bottom: 0, right: 400}} onClick={()=>this.handleReturnClick()} >
          {returnButton}
      </VrButton>}
    </View>)

  }
}


const mapStateToProps = state => {
  return {
      showControls: state.showControls,
      mainScene: state.mainScene,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    openInfoPanel: ( isInfoPanelOpen ) => dispatch({type: 'CHANGE_INFOPANEL_STATE', val: isInfoPanelOpen}),
    goToMainScene: () => dispatch({type: 'GOTO_MAINSCENE'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanelControlButton)

