import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { DefaultStyle } from '../screens/styles/NavigatorStyles'

const NAME = 'Tayathorn'

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={{ uri: 'https://lh3.googleusercontent.com/hMhDEKgJykklyEFU5CiuWjdboLrAhj3MsGmLGTrNLEIvs28YNTDxWHmQmasFCCpPXQ=h900' }}
        />
        <View style={styles.welcomeWrapper} >
          <Text style={styles.header} >Hi</Text>
          <Text style={styles.title} >{NAME}</Text>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  backdrop: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch'
  },
  welcomeWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 60,
    color: '#FDFDFD',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
    color: '#FDFDFD',
    fontWeight: 'bold',
  }
});
