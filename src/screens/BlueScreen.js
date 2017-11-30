
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

  state = {
    showNavbar: true,
  }

  constructor(props) {
    super(props)

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = (event) => {
    console.log('[NAVIGATOR] -- navigator event : ', event)
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'dismissModal') {
        this.props.navigator.dismissModal({
          animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
      }
    }
  }

  _onPressBlueScreenButton = () => {
    const { navigator, navigatorStyle } = this.props
    navigator.showModal({
      screen: 'BlueScreen',
      title: 'Modal',
      navigatorStyle,
      passProps: {
        navigatorStyle,
      }
    })
  }

  _onPresstoggleNavBarButton = () => {
    console.log('[STATE] -- showNavbar : ', this.state.showNavbar)
    this.setState({
      showNavbar: !this.state.showNavbar,
    }, () => {
      console.log('[STATE] -- D JA')
      this.props.navigator.toggleNavBar({
        to: this.state.showNavbar ? 'shown' : 'hidden',
        animated: true
      })
    })
  }
  _onPressDismissAllModals = () => {
    this.props.navigator.dismissAllModals({
      animationType: 'slide-down'
    })
  }

  render() {
    console.log('[PROPS] -- this.props : ', this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          BlueScreen
        </Text>
        <Button
          title={'Modal'}
          onPress={this._onPressBlueScreenButton}
        />
        <Button
          title={'toggleNavBar'}
          onPress={this._onPresstoggleNavBarButton}
          style={{ marginTop: 5 }}
        />
        <Button
          title={'Dismiss All Modal'}
          onPress={this._onPressDismissAllModals}
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
