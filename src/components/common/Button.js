import React from 'react'
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native'

const Button = ({ onPress, title }) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  wrapper: {
    backgroundColor: '#212121',
    padding:10,
  },

  title: {
    color: 'white',
  },
}

export default Button