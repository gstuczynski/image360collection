import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Environment,
  staticResourceURL,
  asset,
  VrButton
} from 'react-360';
import Card from './Card'
import { connect } from 'react-redux';

class SceneManager extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards : ['aa'],
    }
  }

  componentDidMount(){
    console.log('cc')
    fetch('/static_assets/cards/cards1.json')
      .then(response => response.json())
      .then(responseData => {
          this.setState({
            cards: responseData.cards
          })
      })
      .catch(err => console.log(err))

  }

  renderCards = (cards = []) => {
    let position = {
      top: 500,
      left: 0
    }
    return cards.map((card, idx, cards) => {
      position.left += 200
      if (idx%4===0){
        position.top -= 100
        position.left = 0
      }
      console.log(position)
      return (
        <Card
          key={idx}
          idx={idx}
          onClick={() => console.log(idx)}
          //title={card.title}
          //preview={card.preview}
          position={position}
          top={position.top}
          left={position.left}
        />
      );
    });
  };
  
  render() {
    return (
      <View style={styles.panel}>
      {/* Added this becouse 1st elements is strangely rendered - unexpected position - propably BUG */ } 
      {console.log('this.props.showCards',this.props.showCards)}     
        <VrButton />
        {this.props.showCards && this.renderCards(new Array(3).fill('x'))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    //width: 1000,
   // height: 600,
    //backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

const mapStateToProps = state => {
  return {
      showCards: state.showCards
  };
}

export default connect(mapStateToProps)(SceneManager)