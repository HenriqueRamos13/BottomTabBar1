import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  StatusBar,
} from 'react-native';
import Button from './src/components/Button';
import CenterButton from './src/components/CenterButton';

class App extends React.Component {
  state = {
    open: false,
  };

  height = new Animated.Value(60);
  width = new Animated.Value(1);

  render() {
    return (
      <View style={styles.cover}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.bottom}>
          <View style={styles.buttonsCover}>
            <Button
              open={this.state.open}
              left
              icon={this.state.open ? 'camera' : 'apps'}
            />
            <Button
              open={this.state.open}
              icon={this.state.open ? 'video' : 'magnify'}
            />
            <Animated.View
              style={[
                styles.completeBack,
                {
                  height: this.height,
                  width: this.width.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['20%', '20%'],
                  }),
                },
              ]}
            />
            <CenterButton
              open={this.state.open}
              icon="plus"
              onPress={() =>
                this.setState({open: !this.state.open}, () =>
                  this.state.open
                    ? (Animated.timing(this.width, {
                        toValue: 0,
                        duration: 0,
                      }).start(),
                      Animated.timing(this.height, {
                        toValue: 0,
                        duration: 0,
                      }).start())
                    : (Animated.timing(this.width, {
                        toValue: 1,
                        duration: 400,
                      }).start(),
                      Animated.timing(this.height, {
                        toValue: 60,
                        duration: 400,
                      }).start()),
                )
              }
            />
            <Button
              open={this.state.open}
              icon={this.state.open ? 'microphone' : 'heart-outline'}
            />
            <Button
              open={this.state.open}
              right
              icon={this.state.open ? 'music' : 'human-male'}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: 'lightgray',
    height: '100%',
    width: '100%',
  },
  bottom: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  completeBack: {
    backgroundColor: 'white',
  },
  buttonsCover: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
