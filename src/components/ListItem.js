import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, tempWrapper, temp } = styles

  return (
    <View style={item}>
      <Feather name={'cloud-rain'} size={50} color={'#ffffff'} />
      <Text style={date}>{dt_txt}</Text>
      <View style={tempWrapper}>
        <Text style={temp}>{max}</Text>
        <MaterialCommunityIcons
          name="slash-forward"
          size={18}
          color="rgba(255, 255, 255, 0.8)"
        />
        <Text style={temp}>{min}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(35, 45, 81, 0.2)',
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
})

export default ListItem
