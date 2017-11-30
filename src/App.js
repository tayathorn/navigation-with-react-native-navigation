import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

registerScreens()

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
    title: 'Home',
    navigatorStyle: {},
    navigatorButtons: {}
  }
})
