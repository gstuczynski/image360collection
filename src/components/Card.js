import React from 'react';
import { StyleSheet, Text, VrButton, View, Environment, asset, staticResourceURL } from 'react-360';
import _ from 'underscore';
import { connect } from 'react-redux';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idx : this.props.idx,
      image: '',
      preview: '',
      title: '',
      content: '',
    }
  }

  componentDidMount(){
    fetch(`${asset("cards/cards1.json").uri}`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState(response.cards[this.state.idx])
    }
    )
  }

  updateScene = () => {
    Environment.setBackgroundImage(asset(`images/${this.state.image}`), { format: '2D' });
    this.props.onChangeScene(this.state)
  };

  render() {
    this.styles = {
      button: {
        margin: 5,
        height: 60,
        width: 120,
        backgroundColor: 'red',
        position: 'absolute',
        top: this.props.top,
        left: this.props.left
      },
      button2: {
        margin: 5,
        height: 60,
        width: 120,
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 50,
        left: 50
      },
      text: {
        fontSize: 10,
        textAlign: 'center',
      },
    };
    return (
      <VrButton style={this.styles.button} onClick={() => this.updateScene()} >
        <Text style={this.styles.text}>TEST</Text>
      </VrButton>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Button)