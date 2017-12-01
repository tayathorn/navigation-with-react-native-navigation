import { Navigation } from 'react-native-navigation'

import Home from './Home'
import Message from './Message'
import BlueScreen from './BlueScreen'

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('Message', () => Message)
  Navigation.registerComponent('BlueScreen', () => BlueScreen)
}