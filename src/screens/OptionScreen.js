import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {CommonHeader, Container} from '../components';
import {images, scale} from '../utils';
import {useNavigation} from '@react-navigation/native';

const OptionScreen = () => {
  const navigation = useNavigation();

  const onStartPress = () => {
    navigation.navigate('Home');
  };

  const onShopPress = () => {
    navigation.navigate('Shope');
  };

  const onSettingPress = () => {};

  const onExitPress = () => {
    navigation.navigate('SplashScreen');
  };

  return (
    <Container>
      <View style={styles.Container}>
        <CommonHeader />

        <ImageBackground
          source={images.inputBackground}
          style={styles.inputBackground}>
          <TouchableOpacity onPress={onStartPress}>
            <Image source={images.startButton} style={styles.blueButtons} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onShopPress}>
            <Image source={images.shopButton} style={styles.blueButtons} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onSettingPress}>
            <Image source={images.settingButton} style={styles.blueButtons} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onExitPress}>
            <Image source={images.exitButton} style={styles.blueButtons} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Container>
  );
};

export default OptionScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  inputBackground: {
    height: scale(315),
    width: scale(290),
    paddingHorizontal: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueButtons: {
    height: scale(45),
    width: scale(160),
    marginVertical: scale(8),
  },
});
