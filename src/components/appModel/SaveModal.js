import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import {scale, theme, loader, images} from '../../utils';
import Label from '../Label';

const SaveModal = props => {
  const {show, background} = props;
  return (
    show && (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={show}
        statusBarTranslucent
        backdropOpacity={0.8}
        style={{margin: 0}}
        onRequestClose={() => {}}>
        <View style={[styles.modalBackground, background]}>
          <View style={{}}>
            {/* <Image source={images.save} /> */}
            <ImageBackground
              source={images.save}
              resizeMode="contain"
              style={styles.imageBackground}>
              <TouchableOpacity
                style={{zIndex: 11, right: 0, position: 'absolute', top: 0}}>
                <Image source={images.close} />
              </TouchableOpacity>
              <Label
                title={'VVOI SALVARE IL VIDEO?'}
                style={{fontSize: 40, textAlign: 'center'}}
              />
              <View style={styles.buttonView}>
                <TouchableOpacity>
                  <Image source={images.yesButton} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={images.noButton} resizeMode="contain" />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </Modal>
    )
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: scale(20),
    backgroundColor: '#00000040',
    zIndex: 111,
  },
  label: {textAlign: 'center', color: theme.colors.black},
  activityIndicatorWrapper: {
    backgroundColor: theme.colors.white,
    borderRadius: scale(10),
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(75),
    width: scale(75),
  },
  imageBackground: {
    height: scale(250),
    width: scale(250),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {width: 100, height: 100, zIndex: 11},
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    top: scale(25),
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default SaveModal;
