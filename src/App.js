import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

import { DefaultStyle } from './screens/styles/NavigatorStyles'

registerScreens()


Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
    title: 'Home',
    navigatorStyle: { ...DefaultStyle },
    navigatorButtons: {}
  }
})
