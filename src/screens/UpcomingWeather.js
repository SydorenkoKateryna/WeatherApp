import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  ImageBackground,
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
  {
    dt_txt: '2022-08-30 17:00:00',
    main: {
      temp_min: 296.2,
      temp_max: 296.31,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
  {
    dt_txt: '2022-08-30 18:00:00',
    main: {
      temp_min: 292.84,
      temp_max: 294.94,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
]

const Empty = () => (
  <View style={styles.empty}>
    <Text>
      Here we need different content to display to users if for some reason we
      don't have the data.
    </Text>
  </View>
)

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={Math.round((item.main.temp_min - 32) / 1.8)}
      max={Math.round((item.main.temp_max - 32) / 1.8)}
    />
  )

  const { container, list, imageBackground } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={imageBackground}
      >
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          ListEmptyComponent={<Empty />}
          style={list}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AB9E3',
  },
  list: {
    marginTop: StatusBar.currentHeight,
  },
  empty: {
    padding: 20,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  imageBackground: {
    flex: 1,
  },
})

export default UpcomingWeather
