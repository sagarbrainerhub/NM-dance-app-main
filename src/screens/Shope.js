import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CommonHeader, Container, Label} from '../components';
import {images, scale, theme} from '../utils';
import data from '../utils/mockData';
import {useDispatch, useSelector} from 'react-redux';
import {setSoap} from '../redux/actions/authActions';
const {width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

const Shope = () => {
  const navigation = useNavigation();

  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loader, setLoader] = useState(false);

  const userDetails = useSelector(state => state.auth.userDetails);

  console.log('this is token', userDetails?.token);

  const dispatch = useDispatch();

  const handleNext = () => {
    setLoader(true);

    dispatch(setSoap(navigation, setLoader, userDetails?.token)); // Call the setLogin action with the soapData

    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * width,
        y: 0,
        animated: true,
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex - 1) * width,
        y: 0,
        animated: true,
      });
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <CommonHeader showBackButton={true} />
        <View
          style={{
            height: theme.SCREENHEIGHT * 0.55,
            marginTop: scale(-50),
          }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={scrollViewRef}
            onMomentumScrollEnd={event => {
              const newIndex = Math.floor(
                event.nativeEvent.contentOffset.x / width,
              );
              setCurrentIndex(newIndex);
            }}>
            {data.map((image, index) => (
              <View key={index} style={styles.cardContainer}>
                <Image source={image.userImg} style={styles.userImg} />
                <Image
                  source={image.imgUrl}
                  style={{width: '85%', resizeMode: 'contain'}}
                />
                {image.isLock && (
                  <Image source={images.lock} style={styles.lock} />
                )}
                <TouchableOpacity style={styles.btnImage}>
                  <Image
                    source={image.isLock ? images.sblocca : images.certo}
                  />
                </TouchableOpacity>
                <View style={styles.viewTxt}>
                  <Label title={image.title} style={styles.txt} />
                  <Label title={image.body} style={styles.txt} />
                </View>

                {/* <LinearGradient
                  colors={['#a8ff78', '#78ffd6']}
                  start={{x: -0.2, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{
                    height: theme.SCREENHEIGHT / 2.7,
                    borderRadius: scale(60),
                    marginHorizontal: 20,
                  }}>
                  <View
                    style={{
                      height: scale(200),
                      width: scale(100),
                      backgroundColor: 'red',
                      alignSelf: 'center',
                      top: scale(-50),
                      position: 'absolute',
                      zIndex: 111,
                    }}
                  />
                </LinearGradient> */}
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity onPress={handlePrev} style={styles.btn}>
            <Image source={images.previous} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleNext}>
            <Image source={images.next} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    color: theme.colors.white,
    alignSelf: 'center',
    fontSize: scale(30),
    letterSpacing: 2,
  },
  btnView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  viewTxt: {
    position: 'absolute',
    bottom: scale(120),
  },
  btn: {
    paddingHorizontal: scale(2),
    margin: scale(5),
  },
  btnImage: {
    zIndex: 11,
    position: 'absolute',
    bottom: scale(30),
  },
  userImg: {
    zIndex: 11,
    position: 'absolute',
    top: scale(45),
    resizeMode: 'contain',
  },
  lock: {
    zIndex: 11,
    position: 'absolute',
    top: scale(80),
    resizeMode: 'contain',
    left: theme.SCREENWIDTH * 0.66,
  },
  cardContainer: {
    width,
    alignItems: 'center',
  },
});

export default Shope;
