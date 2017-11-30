import { Navigation } from 'react-native-navigation'

import Home from './Home'

export function registerScreens() {
  Navigation.registerComponent('test', () => Home)
}