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

const data = [
  {
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/1200px-Adele_2016.jpg',
    title: 'Adele',
    description: 'this is description'
  }
]

export default class Message extends Component {

  render() {
    return (
      <View style={styles.container}>
       
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
});
