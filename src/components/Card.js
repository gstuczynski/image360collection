import React from "react";
import { Text, VrButton, View, Environment, asset, Animated } from "react-360";
import _ from "underscore";
import { string, number } from "prop-types";
import { connect } from "react-redux";

const INITIAL_PREVIEW_SIZE = 120;
const SCALED_PREVIEW_SIZE = 300;
const PREVIEW_ANIMATION_DURATION = 250;

class Card extends React.Component {
  static propTypes = {
    idx: number.isRequired,
    image: string.isRequired,
    previewImg: string.isRequired,
    title: string,
    content: string,
    top: number.isRequired,
    left: number.isRequired
  };

  static defaultProps = {
    title: "",
    content: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      isOverButton: false,
      isOverPreview: false,
      previewSize: new Animated.Value(INITIAL_PREVIEW_SIZE)
    };
  }

  handlePreviewEnter = () => {
    Animated.timing(this.state.previewSize, {
      toValue: SCALED_PREVIEW_SIZE,
      duration: PREVIEW_ANIMATION_DURATION
    }).start();

    this.setState({ isOverPreview: true });
  };

  handlePreviewExit = () => {
    Animated.timing(this.state.previewSize, {
      toValue: INITIAL_PREVIEW_SIZE,
      duration: PREVIEW_ANIMATION_DURATION
    }).start();

    this.setState({ isOverPreview: false });
  };

  handleButtonEnter = () => {
    this.setState({ isOverButton: true });
  };

  handleButtonExit = () => {
    this.setState({ isOverButton: false });
  };

  updateScene = () => {
    Environment.setBackgroundImage('https://goo.gl/maps/9RFCYVWb7YG2');
    this.props.onChangeScene({
      title: this.props.title,
      content: this.props.content
    });
  };

  render() {
    this.styles = {
      image: {
        top: 0,
        borderColor: "rgba(255, 255, 255, 1)",
        position: "absolute",
        zIndex: -1
      }
    };

    return (
      <VrButton
        onClick={() => this.updateScene()}
        onEnter={this.handleButtonEnter}
        onExit={this.handleButtonExit}
      >
        {Boolean(this.props.previewImg) && (
          <Animated.Image
            source={asset(`previewImages/${this.props.previewImg}`)}
            onEnter={this.handlePreviewEnter}
            onExit={this.handlePreviewExit}
            style={[
              this.styles.image,
              {
                width: this.state.previewSize,
                height: this.state.previewSize,
                borderWidth: this.state.isOverPreview ? 1 : 0,
                borderRadius: this.state.isOverPreview ? 150 : 60,
                top: this.state.isOverPreview
                  ? this.props.top - 50
                  : this.props.top,
                left: this.state.isOverPreview
                  ? this.props.left - 50
                  : this.props.left
              }
            ]}
          />
        )}
      </VrButton>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeScene: sceneProps =>
      dispatch({ type: "CHANGE_SCENE", sceneProps: sceneProps })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
