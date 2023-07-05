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
      <StatusBar backgroundColor="#9fc5e8" barStyle={statusBarStyle} />
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
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
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: '#1a1a20',
    fontSize: 48,
  },
  feels: {
    color: '#1a1a20',
    fontSize: 30,
  },
  highLow: {
    color: '#1a1a20',
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
    color: '#1a1a20',
    fontSize: 48,
  },
  message: {
    color: '#1a1a20',
    fontSize: 30,
  },
})

export default CurrentWeather
