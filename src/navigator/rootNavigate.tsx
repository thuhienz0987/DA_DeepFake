import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/main/HomeScreen';
import UserManualScreen from '../screens/main/UserManualScreen';
import LandingScreen from '../screens/landing/LandingScreen';
import OnboardScreen from '../screens/onboard/OnboardScreen';

const Stack = createNativeStackNavigator();
const RootNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserManual" component={UserManualScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Onboard" component={OnboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigate;

const styles = StyleSheet.create({});
