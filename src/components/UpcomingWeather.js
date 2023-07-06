import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  // statusBarStyle,
  FlatList,
  // Image,
  ImageBackground,
} from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

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

const Item = ({ dt_txt, min, max, condition }) => (
  <View style={styles.item}>
    <Ionicons name={'rainy-outline'} size={50} color={'rgba(0, 0, 0, 0.2)'} />
    <Text style={styles.date}>{dt_txt}</Text>
    <View style={styles.tempWrapper}>
      <Text style={styles.temp}>{max}</Text>
      <MaterialCommunityIcons
        name="slash-forward"
        size={18}
        color="rgba(255, 255, 255, 0.6)"
      />
      <Text style={styles.temp}>{min}</Text>
    </View>
  </View>
)

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={Math.round((item.main.temp_min - 32) / 1.8)}
      max={Math.round((item.main.temp_max - 32) / 1.8)}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.imageBackground}
      >
        {/* <StatusBar backgroundColor="#8AB9E3" barStyle="light-content" /> */}
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        {/* <Text>Upcoming Weather</Text> */}
        {/* <Image source={require('../../assets/upcoming-background.jpg')} style={styles.image}/> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          // ItemSeparatorComponent={() => (
          //   <View style={{ backgroundColor: '#ffffff', height: 1 }} />
          // )}
          ListEmptyComponent={<Empty />}
          style={styles.list}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#8AB9E3',
  },
  list: {
    marginTop: StatusBar.currentHeight,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 20,
    backgroundColor: 'rgba(97, 160, 217, 0.6)',
  },
  empty: {
    padding: 20,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  tempWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: '#ffffff',
    fontSize: 20,
  },
  date: {
    color: '#ffffff',
    fontSize: 15,
  },
  // image: {
  //   height: 100,
  //   width: 100,
  // },
  imageBackground: {
    flex: 1,
  },
})

export default UpcomingWeather
