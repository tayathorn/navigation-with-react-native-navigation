
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Button from '../components/common/Button'


export default class BlueScreen extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Close',
        id: 'dismissModal',
      }
    ]
  }

  constructor(props) {
    super(props)

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = (event) => {
    if(event.type === 'NavBarButtonPress') {
      if(event.id === 'dismissModal') {
        this.props.navigator.dismissModal({
          animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
      }
    }
  }

  _onPressBlueScreenButton = () => {
    this.props.navigator.showModal({
      screen: 'BlueScreen',
      title: 'Modal'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          BlueScreen
        </Text>
        <Button
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
    backgroundColor: '#00BCD4',
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
