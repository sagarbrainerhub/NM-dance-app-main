import {Alert, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Container, Loader, SaveModel} from '../components';
import {images, scale} from '../utils';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const onPlayPress = () => {
    navigation.navigate('Register');
  };

  return (
    <>
      <Container>
        <View style={styles.container}>
          <Image source={images.logoTitle} style={styles.logoTitle} />

          <TouchableOpacity onPress={onPlayPress}>
            <Image source={images.playButton} style={styles.playButton} />
          </TouchableOpacity>
        </View>
        {/* <SaveModel show /> */}
      </Container>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoTitle: {
    height: scale(190),
    width: scale(202),
  },
  playButton: {
    height: scale(40),
    width: scale(74),
    marginTop: scale(10),
  },
});
