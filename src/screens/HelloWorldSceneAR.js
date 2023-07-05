import React, {useEffect, useRef} from 'react';
import {
  ViroARScene,
  ViroText,
  ViroARSceneNavigator,
  ViroAmbientLight,
  Viro3DObject,
  ViroNode,
  ViroButton,
  ViroMaterials,
  ViroAnimations,
} from '@viro-community/react-viro';
import {
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import RNFS from 'react-native-fs';

export const HelloWorldSceneAR = () => {
  const carScale = 0.1;
  //   const arCameraRef = useRef(null);

  //   const captureImage = async () => {
  //     try {
  //       if (arCameraRef.current) {
  //         const result = await arCameraRef.current.takeScreenshotAsync(true);
  //         saveImageToGallery(result);
  //       } else {
  //         console.log('AR camera reference is null');
  //       }
  //     } catch (error) {
  //       console.log('Image capture error:', error);
  //     }
  //   };

  //   const saveImageToGallery = async imageUri => {
  //     if (Platform.OS === 'android') {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
  //           const destPath = `${RNFS.PicturesDirectoryPath}/${fileName}`;
  //           await RNFS.copyFile(imageUri, destPath);
  //           showToast('Image saved to gallery.');
  //         } else {
  //           showToast('Permission denied. Image not saved.');
  //         }
  //       } catch (error) {
  //         console.log('Save image error:', error);
  //       }
  //     } else {
  //       showToast('Saving to gallery is only supported on Android.');
  //     }
  //   };

  //   const showToast = message => {
  //     ToastAndroid.show(message, ToastAndroid.SHORT);
  //   };

  useEffect(() => {
    ViroAnimations.registerAnimations({
      rotateWheel: {
        properties: {
          rotateY: '+=360',
        },
        duration: 1000, // Adjust the duration as needed
      },
    });
  }, []);

  ViroMaterials.createMaterials({
    dropShadow: {
      diffuseTexture: require('../assets/car_shadow.png'),
      lightingModel: 'Constant',
      blendMode: 'Subtract',
    },
    invisibleMaterial: {
      diffuseColor: '#ffffff00',
    },
  });

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />

      <ViroNode
        position={[0, -0.5, -1]}
        dragType="FixedToWorld"
        animation={{name: 'appear', run: true, loop: true}}
        onDrag={() => {}}>
        <ViroNode scale={[carScale, carScale, carScale]}>
          <Viro3DObject
            position={[0, 0, 0]}
            source={require('../assets/car_body.vrx')}
            type="VRX"
            resources={[
              require('../assets/bumblebee_Base_Color.png'),
              require('../assets/bumblebee_Metallic.jpg'),
              require('../assets/bumblebee_Roughness.jpg'),
              require('../assets/bumblebee_Normal_OpenGL.jpg'),
            ]}
          />

          {/* Front left - need 2 containers, 1 for the side-to-side rotation, 1 for spin*/}
          <ViroNode position={[-0.61, 0.363, -1.336]}>
            <ViroNode
              animation={{
                name: 'rotateWheel',
                run: true,
                loop: true,
              }}>
              <Viro3DObject
                source={require('../assets/car_wheels.vrx')}
                type="VRX"
                rotation={[0, 180, 0]} // the left wheels need to be rotated 180
                resources={[
                  require('../assets/wheels_Base_Color.jpg'),
                  require('../assets/wheels_Metallic.jpg'),
                  require('../assets/wheels_Roughness.jpg'),
                  require('../assets/wheels_Normal_OpenGL.jpg'),
                ]}
              />
            </ViroNode>
          </ViroNode>

          {/* Front right - need 2 containers, 1 for the side-to-side rotation, 1 for spin*/}
          <ViroNode position={[0.61, 0.363, -1.336]}>
            <ViroNode
              animation={{
                name: 'rotateWheel',
                run: true,
                loop: true,
              }}>
              <Viro3DObject
                source={require('../assets/car_wheels.vrx')}
                type="VRX"
                resources={[
                  require('../assets/wheels_Base_Color.jpg'),
                  require('../assets/wheels_Metallic.jpg'),
                  require('../assets/wheels_Roughness.jpg'),
                  require('../assets/wheels_Normal_OpenGL.jpg'),
                ]}
              />
            </ViroNode>
          </ViroNode>

          {/* Rear left */}
          <ViroNode position={[-0.61, 0.363, 1.355]}>
            <Viro3DObject
              source={require('../assets/car_wheels.vrx')}
              type="VRX"
              rotation={[0, 180, 0]} // the left wheels need to be rotated 180
              resources={[
                require('../assets/wheels_Base_Color.jpg'),
                require('../assets/wheels_Metallic.jpg'),
                require('../assets/wheels_Roughness.jpg'),
                require('../assets/wheels_Normal_OpenGL.jpg'),
              ]}
            />
          </ViroNode>

          {/* Rear right */}
          <ViroNode position={[0.61, 0.363, 1.355]}>
            <Viro3DObject
              source={require('../assets/car_wheels.vrx')}
              type="VRX"
              resources={[
                require('../assets/wheels_Base_Color.jpg'),
                require('../assets/wheels_Metallic.jpg'),
                require('../assets/wheels_Roughness.jpg'),
                require('../assets/wheels_Normal_OpenGL.jpg'),
              ]}
            />
          </ViroNode>
        </ViroNode>
      </ViroNode>
      {/* 
      <ViroButton
        position={[0, -0.8, -1]}
        scale={[0.3, 0.3, 0.3]}
        source={require('../assets/camera.png')}
        onClick={captureImage}
      /> */}
    </ViroARScene>
  );
};
