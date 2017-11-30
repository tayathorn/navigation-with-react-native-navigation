import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from '../components/common/Button'


export default class GreenScreen extends Component {
  _onPressGreenScreenButton = () => {
    this.props.navigator.push({
      screen: 'GreenScreen',
      title: 'Push'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          GreenScreen
        </Text>
        <Button
          title={'Push'}
          onPress={this._onPressGreenScreenButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FAFAFA',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
