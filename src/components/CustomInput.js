import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

import {images, scale} from '../utils';
import Label from './Label';

const CustomInput = props => {
  const {title, value, onChangeText, placeholder, secureTextEntry} = props;

  return (
    <View style={styles.container}>
      <Image source={images.inputStar} style={styles.star} />

      <View>
        <Label title={title} />

        <ImageBackground source={images.inputContainer} style={styles.inputImg}>
          <TextInput
            style={styles.inputStyle}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(4),
  },
  inputStyle: {
    paddingHorizontal: scale(15),
    height: scale(35),
  },
  inputImg: {
    height: scale(33),
    width: scale(175),
  },
  star: {
    height: scale(45),
    width: scale(45),
    marginTop: scale(10),
  },
});
