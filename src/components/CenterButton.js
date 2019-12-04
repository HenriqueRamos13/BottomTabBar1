import React, {Component} from 'react';
import {View, StyleSheet, Animated, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CenterButton extends Component {
  bottom = new Animated.Value(30);
  rotate = new Animated.Value(0);

  render() {
    if (this.props.open) {
      Animated.timing(this.bottom, {toValue: -10, duration: 400}).start();
      Animated.timing(this.rotate, {toValue: 1, duration: 400}).start();
    } else {
      Animated.timing(this.bottom, {toValue: 30, duration: 400}).start();
      Animated.timing(this.rotate, {toValue: 0, duration: 400}).start();
    }

    return (
      <Animated.View
        style={[
          styles.cover,
          {
            transform: [
              {
                rotate: this.rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-135deg'],
                }),
              },
            ],
            bottom: this.bottom,
          },
        ]}>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => this.props.onPress()}>
          <Icon name={this.props.icon} size={30} color="white" />
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  cover: {
    padding: '8%',
    paddingTop: '4%',
    paddingBottom: '4%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    width: '20%',
    height: 80,
    borderRadius: 80,
    zIndex: 2,
  },
  buttonStyle: {
    backgroundColor: 'red',
    height: '80%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
});
