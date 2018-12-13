import React from 'react';
import { StyleSheet, Text, VrButton, View, Environment, asset, staticResourceURL } from 'react-360';
import _ from 'underscore';
import { string, number, shape } from 'prop-types'
import { connect } from 'react-redux';

class Card extends React.Component {
  static propTypes = {
    idx: number.isRequired,
    image: string.isRequired,
    preview: string,
    title: string,
    content: string,
    top: number.isRequired,
    left: number.isRequired,
  }

static defaultProps = {
  preview: '',
  title: '',
  content: '',
}

  constructor(props){
    super(props);
  }

  updateScene = () => {
    Environment.setBackgroundImage(asset(`images/${this.props.image}`), { format: '2D' });
    console.log('sasaas', this.props)
    this.props.onChangeScene({
      title: this.props.title,
      content: this.props.content
    })
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

const mapDispatchToProps = dispatch => {
  return {
    onChangeScene: (sceneProps) => dispatch({type: 'CHANGE_SCENE', sceneProps: sceneProps})
  }
}

export default connect(null, mapDispatchToProps)(Card)