import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'

import SplashScreen from './src/screen/Splash'
import WelcomeScreen from './src/screen/Welcome'
import LoginScreen from './src/screen/Login'
import RegistrationScreen from './src/screen/Registration'
import Dashboard from './src/screen/Dashboard'
import Searchbar from './src/screen/Search'
import Pesan from './src/screen/Pesan'
import Notifikasi from './src/screen/Notifikasi'
import Appointment from './src/screen/Appointment'
import Detail from './src/screen/Detail'
import TambahHewan from './src/screen/TambahHewan'
import Pencarian from './src/screen/Pencarian'
import Editpro from './src/screen/Editpro'
import TulisPesan from './src/screen/TulisPesan'
import Sukses from './src/screen/SuccesScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'
      screenOptions={{
        tabBarActiveTintColor: '#FDCB5A',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff'
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Pencarian'
        component={Pencarian}
        options={{
          tabBarLabel: 'Searchbar',
          tabBarIcon: ({ color, size }) => (
            <Material name='search' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Pesan'
        component={Pesan}
        options={{
          tabBarLabel: 'Pesan',
          tabBarIcon: ({ color, size }) => (
            <Icon name='message-processing' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifikasi'
        component={Notifikasi}
        options={{
          tabBarLabel: 'Notifikasi',
          tabBarIcon: ({ color, size }) => (
            <Material name='notifications' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Appointment'
        component={Appointment}
        options={{
          tabBarLabel: 'Appointment',
          tabBarIcon: ({ color, size }) => (
            <Icon name='account' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
        <Stack.Screen name='Dashboard' component={RootHome} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='TambahHewan' component={TambahHewan} />
        <Stack.Screen name='Searchbar' component={Searchbar} />
        <Stack.Screen name='Editpro' component={Editpro} />
        <Stack.Screen name='Sukses' component={Sukses} />
        <Stack.Screen name='TulisPesan' component={TulisPesan} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App