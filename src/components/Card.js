import React from 'react';
import { StyleSheet, Text, VrButton, View, Environment, asset, staticResourceURL } from 'react-360';
import _ from 'underscore';


export default class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
      this.setState(response.cards[0])
    }
    )
  }

  updateScene = () => {
    Environment.setBackgroundImage(asset(`images/${this.state.image}`), { format: '2D' });
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
      text: {
        fontSize: 10,
        textAlign: 'center',
      },
    };
    return (
      <VrButton style={this.styles.button} onClick={() => this.updateScene()}>
        <Text style={this.styles.text}>TEST</Text>
      </VrButton>
    );
  }
}