import React, {useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import {HelloWorldSceneAR} from './HelloWorldSceneAR';

const SecondScreen = () => {
  // const arCameraRef = useRef(null);

  // const captureImage = async () => {
  //   try {
  //     if (arCameraRef.current) {
  //       const result = await arCameraRef.current.takeScreenshotAsync(true);
  //       saveImageToGallery(result);
  //     } else {
  //       console.log('AR camera reference is null');
  //     }
  //   } catch (error) {
  //     console.log('Image capture error:', error);
  //   }
  // };

  // const saveImageToGallery = async imageUri => {
  //   // Add code to save image to the gallery
  //   // ...
  // };

  return (
    <View style={{flex: 1}}>
      <ViroARSceneNavigator
        // ref={arCameraRef}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={{flex: 1}}
      />
      {/* <TouchableOpacity
        onPress={{}}
        style={{
          bottom: 20,
          alignSelf: 'center',
          backgroundColor: 'skyblue',
          padding: 16,
          borderRadius: 8,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Capture Image</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SecondScreen;
