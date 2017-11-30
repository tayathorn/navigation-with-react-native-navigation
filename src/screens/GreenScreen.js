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
    const { navigator, testID } = this.props
    navigator.push({
      screen: 'GreenScreen',
      title: 'Push',
      passProps: {
        fromView: testID,
      }
    })
  }
  _onPressPopToRootButton = () => {
    const { navigator } = this.props
    navigator.popToRoot({
      animated: true,
      animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
    })
  }
  render() {
    console.log('[NAVIGATOR] -- props.navigator : ', this.props.navigator)
    console.log('[NAVIGATOR] -- props : ', this.props)
    const { fromView, navigator } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          GreenScreen
        </Text>
        <Text style={styles.welcome}>
          {`dataFromView : ${fromView}`}
        </Text>
        <Button
          title={'Push'}
          onPress={this._onPressGreenScreenButton}
        />
        <Button
          title={'Pop To Root'}
          onPress={this._onPressPopToRootButton}
          style={{ marginTop: 5 }}
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
