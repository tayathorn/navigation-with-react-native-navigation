import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

import { DefaultStyle } from './screens/styles/NavigatorStyles'

registerScreens()


// Navigation.startSingleScreenApp({
//   screen: {
    // screen: 'Home',
    // title: 'Home',
    // navigatorStyle: { ...DefaultStyle },
    // navigatorButtons: {}
//   }
// })

const tabsIcon = (icon) => {
  return {
    icon,
    iconInsets: { 
      top: 10, 
      left: 10,
      bottom: 10,
      right: 10
    },
  }
}

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'Home',
      title: 'Welcome',
      ...tabsIcon(require('../assets/icons/home.png')),
      navigatorStyle: { ...DefaultStyle },
      navigatorButtons: {}
    },
    {
      label: 'Message',
      screen: 'Message',
      title: 'Message',
      ...tabsIcon(require('../assets/icons/chat.png')),
      navigatorStyle: { ...DefaultStyle },
      navigatorButtons: {}
    },
  ]
})
