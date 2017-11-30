import { Navigation } from 'react-native-navigation'

import Home from './Home'
import GreenScreen from './GreenScreen'
import BlueScreen from './BlueScreen'

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('GreenScreen', () => GreenScreen)
  Navigation.registerComponent('BlueScreen', () => BlueScreen)
}