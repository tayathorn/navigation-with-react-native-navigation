import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Button from '../components/common/Button'

import { DefaultStyle, ModalStyle } from '../screens/styles/NavigatorStyles'


export default class Home extends Component {

  _onPressGreenScreenButton = () => {
    const { navigator, testID } = this.props

    navigator.push({
      screen: 'GreenScreen',
      title: 'Push',
      passProps: {
        fromView: testID,
      }
    })
  }
  _onPressBlueScreenButton = () => {
    this.props.navigator.showModal({
      screen: 'BlueScreen',
      title: 'Modal',
      navigatorStyle: { ...ModalStyle },
      passProps: {
        navigatorStyle: { ...ModalStyle },
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello React Native Navigation !
        </Text>
        <Button
          title={'Push'}
          onPress={this._onPressGreenScreenButton}
        />
        <Button
          style={{ marginTop: 10 }}
          title={'Modal'}
          onPress={this._onPressBlueScreenButton}
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
