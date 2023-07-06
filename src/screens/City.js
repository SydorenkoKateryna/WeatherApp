import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native'
import IconText from '../components/IconText'

const City = () => {
  const {
    container,
    imageBackground,
    wrapper,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageBackground}
      >
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={wrapper}>
          <Text style={[cityName, cityText]}>London</Text>
          <Text style={[countryName, cityText]}>UK</Text>

          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={'user'}
              iconColor={'#232d51'}
              bodyText={'8000'}
              bodyTextStyles={populationText}
            />
          </View>

          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={'sunrise'}
              iconColor={'#ffffff'}
              bodyText={'10:46:58am'}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={'sunset'}
              iconColor={'#ffffff'}
              bodyText={'17:28:15pm'}
              bodyTextStyles={riseSetText}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: StatusBar.currentHeight,
  },
  imageBackground: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 700,
    color: '#232d51',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    color: '#232d51',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: '#ffffff',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default City
