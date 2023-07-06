import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: '#ffffff',
        // tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0, // <--
        },
      }}
      initialRouteName="Current"
    >
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          //   headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? '#ffffff' : 'rgba(0, 0, 0, 0.4)'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? '#ffffff' : 'rgba(0, 0, 0, 0.4)'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? '#ffffff' : 'rgba(0, 0, 0, 0.4)'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
