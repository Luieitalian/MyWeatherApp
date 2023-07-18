import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './screens/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { createContext } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
