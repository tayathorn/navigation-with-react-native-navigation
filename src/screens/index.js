import { Navigation } from 'react-native-navigation'

import Home from './Home'
import FirstScreen from './FirstScreen'

export function registerScreens() {
  Navigation.registerComponent('Home', () => Home)
  Navigation.registerComponent('FirstScreen', () => FirstScreen)
}