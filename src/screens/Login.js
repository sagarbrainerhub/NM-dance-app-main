import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CommonHeader, Container, CustomInput, Label} from '../components';
import {images, scale} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  ErrorText,
  PrimaryText,
  SecondaryText,
} from '../assets/theme/CustomText';
import {useDispatch} from 'react-redux';
import {setLogin} from '../redux/actions/authActions';

const Login = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('Ram@gmail.com');
  const [password, setPassword] = useState('1234');
  const [loader, setLoader] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [wrongEmailError, setWrongEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const dispatch = useDispatch();

  const loginData = {
    email: userName,
    password: password,
  };

  const onLoginPress = () => {
    if (userName === '') {
      setEmailError(true);
    } else if (reg.test(userName) === false) {
      setWrongEmailError(true);
    } else if (password === '') {
      setPasswordError(true);
    } else {
      //  setLoader(true);

      //  dispatch(setLogin(loginData, navigation));
      navigation.navigate('option');
    }
  };

  const ontiktokPress = () => {};

  const onInstagramPress = () => {};

  const onFacebookPress = () => {};

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <CommonHeader showBackButton={true} />

        <ImageBackground
          source={images.loginInputBackground}
          style={styles.inputBackground}>
          <CustomInput
            title="USERNAME/EMAIL"
            value={userName}
            onChangeText={value => {
              setUserName(value);
              setEmailError(false);

              if (reg.test(value) === true) {
                setWrongEmailError(false);
              }
            }}
          />
          {emailError !== false && (
            <ErrorText text="please enter email" style={styles.errortxt} />
          )}
          {wrongEmailError !== false && (
            <ErrorText
              text="please enter valid email"
              style={styles.errortxt}
            />
          )}
          <CustomInput
            title="PASSWORD"
            value={password}
            onChangeText={value => {
              setPassword(value);
              setPasswordError(false);
            }}
            secureTextEntry={true}
          />

          {passwordError !== false && (
            <ErrorText text="please enter password" style={styles.errortxt} />
          )}
        </ImageBackground>

        <TouchableOpacity onPress={onLoginPress}>
          <Image source={images.loginButton} style={styles.loginButton} />
        </TouchableOpacity>

        <Label title="OPPURE ACCEDI CON:" />

        <View style={styles.socialIconView}>
          <TouchableOpacity onPress={ontiktokPress}>
            <Image source={images.tiktok} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onInstagramPress}>
            <Image source={images.instagram} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onFacebookPress}>
            <Image source={images.facebook} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputBackground: {
    height: scale(235),
    width: scale(290),
    paddingHorizontal: scale(30),
    justifyContent: 'center',
  },
  loginButton: {
    height: scale(40),
    width: scale(74),
    marginVertical: scale(25),
  },
  socialIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(160),
    marginTop: scale(10),
  },
  icon: {
    height: scale(45),
    width: scale(45),
  },
  errortxt: {
    marginTop: hp('0.5%'),
  },
});
