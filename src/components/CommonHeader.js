import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {images, scale} from '../utils';

const CommonHeader = props => {
  const {showBackButton} = props;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton === true && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonView}>
          <Image source={images.back} style={styles.backButton} />
        </TouchableOpacity>
      )}

      <View style={styles.logoView}>
        <Image source={images.logo} style={styles.logoStyle} />
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: scale(15),
    marginTop: Platform.OS === 'android' ? scale(70) : scale(85),
    marginBottom: scale(50),
  },
  logoStyle: {
    height: scale(82),
    width: scale(135),
  },
  backButtonView: {
    position: 'absolute',
    zIndex: 1,
  },
  backButton: {
    height: scale(35),
    width: scale(35),
  },
  logoView: {
    alignItems: 'center',
    flex: 1,
  },
});
