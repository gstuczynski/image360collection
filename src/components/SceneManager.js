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
      cards : [],
    }
  }

  componentDidMount(){
    fetch(asset('cards/cards1.json').uri)
      .then(response => response.json())
      .then(responseData => {
        console.log('responseData.cards', responseData.cards)
          this.setState({
            cards: responseData.cards
          })
      })
      .catch(err => console.log(err))
  }

  renderCards = (cards = []) => {
    let position = {
      top: 1000,
      left: 100
    }
    return cards.map((card, idx) => {
      position.left += 250
      if (idx%4===0){
        position.top -= 250
        position.left = 100
      }
      console.log('sasdass',position)
      return (
        <Card
          key={idx}
          idx={idx}
          top={position.top}
          left={position.left}
          image={card.image}
          previewImg={card.previewImg}
          title={card.title}
          content={card.content}
        />
      );
    });
  };
  
  render() {
    return (
      <View style={styles.panel}>
      {/* Added this becouse 1st elements is strangely rendered - unexpected position - propably BUG */ } 
        <VrButton />
        {this.props.showCards && this.renderCards(this.state.cards)}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
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