import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <StatusBar backgroundColor="#8AB9E3" barStyle="light-content" />
      <View style={container}>
        <Feather name={'sun'} size={100} color={'#ffffff'} />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={'Its sunny'}
        messageTwo={'Its perfect t-shirt weather'}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#8ab9e3',
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
    marginBottom: 60,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(35, 45, 81, 0.2)',
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 40,
  },
  message: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 25,
  },
})

export default CurrentWeather
