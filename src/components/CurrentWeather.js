import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  statusBarStyle,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor="#8AB9E3" barStyle={statusBarStyle} />
      <View style={styles.container}>
        <Feather name="sun" size={100} color="rgb(255, 209, 71)" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>

        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#8AB9E3',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: '#ffffff',
    fontSize: 48,
  },
  feels: {
    color: '#ffffff',
    fontSize: 30,
  },
  highLow: {
    color: '#ffffff',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 48,
  },
  message: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 30,
  },
})

export default CurrentWeather
