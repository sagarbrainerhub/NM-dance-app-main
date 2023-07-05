import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {images} from '../utils';

const Container = props => {
  const {children} = props;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={images.backgroundImage}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
  },
  imageContainer: {flex: 1},
});
