import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';
// import {LottieLoader} from 'lottie-loader-react-native';
// import LottieView from 'lottie-react-native';
import {scale, theme, loader} from '../../utils';

const Loader = props => {
  const {loading, background} = props;
  return (
    loading && (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        statusBarTranslucent
        backdropOpacity={0.8}
        style={{margin: 0}}
        onRequestClose={() => {}}>
        <View style={[styles.modalBackground, background]}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size={'large'} color={theme.colors.primary} />
            {/* <LottieView
              source={loader}
              autoPlay
              loop
              style={{height: scale(70)}}
            /> */}
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(75),
    width: scale(75),
  },
  lottie: {width: 100, height: 100, zIndex: 11},
});

export default Loader;
