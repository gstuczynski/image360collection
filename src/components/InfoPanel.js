import React from 'react';
import { View, asset, Text, Image, VrButton } from 'react-360';
import { connect } from 'react-redux';

class InfoPanel extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      content: this.props.content
    }
    console.log('state', this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.content !== this.props.content ){
      console.log('sss',this.state)
      this.setState({
        content: this.props.content
      })
    }

    if(prevProps.title !== this.props.title ){
      this.setState({
        title: this.props.title
      })
    }

  }

  render(){
    return (
      <View style={{ textAlign: 'center', width: 1200, height: 620, margin:'auto', display: 'flex', justifyContent: 'center', paddingTop:'5px',backgroundColor:'black'}}>
        <Text style={{width: 1200, height: 420, textAlign: 'center'}}>{`${this.state.content}`}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
      title: state.title,
      content: state.content,
  };
}

export default connect(mapStateToProps)(InfoPanel)
