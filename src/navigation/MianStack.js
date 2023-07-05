import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

import {
  Login,
  OptionScreen,
  Register,
  Shope,
  SplashScreen,
  HomeScreen,
  SecondScreen,
  HelloWorldSceneVR,
} from '../screens';
import {HelloWorldSceneAR} from '../screens/HelloWorldSceneAR';

const MianStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="option"
          component={OptionScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Shope"
          component={Shope}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MianStack;
