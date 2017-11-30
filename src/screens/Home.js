import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Button from '../components/common/Button'


export default class Home extends Component {

  _onPressFirstScreenButton = () => {
    this.props.navigator.push({
      screen: 'FirstScreen',
      title: 'FirstScreen'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello React Native Navigation !
        </Text>
        <Button
          title={'First Screen'}
          onPress={this._onPressFirstScreenButton}
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
    backgroundColor: '#009688',
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
