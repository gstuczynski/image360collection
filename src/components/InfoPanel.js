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
    console.log("ssadasd", this.state)
    return (
      <View style={{ textAlign: 'center', width: 1200, height: 620, margin:'auto', display: 'flex', justifyContent: 'center'}}>
        <Text style={{backgroundColor:'black', margin: 'auto',textAlign: 'center', padding: 50}}>{`${this.state.content}`}</Text>
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
