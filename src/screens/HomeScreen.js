import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ViroVRSceneNavigator} from '@viro-community/react-viro';
import {HelloWorldSceneVR} from './HelloWorldSceneVR';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ViroVRSceneNavigator
        initialScene={{
          scene: HelloWorldSceneVR,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SecondScreen')}
        style={{
          borderWidth: 1,
          backgroundColor: 'skyblue',
          padding: 50,
          borderRadius: 5,
          top: 100,
        }}>
        <Text>onPress</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
