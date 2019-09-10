import React, { Component } from 'react';
import {
  Image,
  Text, View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

class Blink extends Component {
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState =>
        ({ isShowingText: !previousState.isShowingText }
          ))
    ), 1000);
  }

  state = { isShowingText: true};
  render(){
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Blink text='I love to blink' />
        <Text style={styles.bigBlue}>ほげほげ</Text>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      </View>
    )
  }
}