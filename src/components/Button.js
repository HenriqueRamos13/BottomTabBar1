import React, {Component} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Button extends Component {
  radius = new Animated.Value(0);
  btr = new Animated.Value(15);
  btl = new Animated.Value(15);
  width = new Animated.Value(0);
  bottom = new Animated.Value(0);

  render() {
    if (this.props.open) {
      Animated.timing(this.radius, {toValue: 60, duration: 500}).start();
      Animated.timing(this.btr, {toValue: 60, duration: 500}).start();
      Animated.timing(this.btl, {toValue: 60, duration: 500}).start();
      Animated.timing(this.width, {toValue: 1, duration: 500}).start();
      Animated.timing(this.bottom, {
        toValue: this.props.left || this.props.right ? 16 : 32,
        duration: 500,
      }).start();
    } else {
      Animated.timing(this.radius, {toValue: 0, duration: 500}).start();
      Animated.timing(this.btr, {toValue: 15, duration: 500}).start();
      Animated.timing(this.btl, {toValue: 15, duration: 500}).start();
      Animated.timing(this.width, {toValue: 0, duration: 500}).start();
      Animated.timing(this.bottom, {toValue: 0, duration: 500}).start();
    }

    return (
      <Animated.View
        style={[
          styles.cover,
          {
            bottom: this.bottom,
            width: this.width.interpolate({
              inputRange: [0, 1],
              outputRange: ['20%', '15%'],
            }),
            borderTopLeftRadius: this.props.left ? this.btl : this.radius,
            borderTopRightRadius: this.props.right ? this.btr : this.radius,
            borderRadius: this.radius,
          },
        ]}>
        <Icon name={this.props.icon} size={20} color="black" />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});
