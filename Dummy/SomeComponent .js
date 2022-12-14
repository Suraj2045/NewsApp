'use strict';

import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

class SomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myText: 'News ID:',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }

  onSwipeUp(gestureState) {
    this.setState({ myText: 'News ID:' + this.props.data[0].newsId });
  }

  onSwipeDown(gestureState) {
    this.setState({ myText: 'News ID:' + this.props.data[1].newsId });
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: 'News ID:' + this.props.data[0].newsId });
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: 'News ID:' + this.props.data[1].newsId });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: 'white' });
        break;
      case SWIPE_DOWN:
        this.setState({ backgroundColor: 'white' });
        break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: 'white' });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: 'white' });
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
      >
        <Text>
         <Image
          source={{
            uri: 'https://pixabay.com/images/search/nature/'
          }}
        />
        </Text>
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}
       </Text>

        
      </GestureRecognizer>
    );
  }
}

export default SomeComponent;