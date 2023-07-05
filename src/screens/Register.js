import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { CommonHeader, Container, CustomInput } from '../components';
import { images, scale } from '../utils';

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
import {setRegister} from '../redux/actions/authActions';
const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [wrongEmailError, setWrongEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cPasswordError, setCPasswordError] = useState(false);
  const [wrongCPassError, setWrongCPassError] = useState(false);

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const registerData = {
    username: userName,
    password: password,
    email: email,
  
  
  };



  const onRegisterPress = () => {
    if (userName === '') {
      setUserNameError(true);
    } else if (email === '') {
      setEmailError(true);
    } else if (reg.test(email) === false) {
      setWrongEmailError(true);
    } else if (password === '') {
      setPasswordError(true);
    } else if (confirmPassword === '') {
      setCPasswordError(true);
    } else if (confirmPassword  !== password) {
      setWrongCPassError(true);
    } else {
      setLoader(true);
      dispatch(setRegister(registerData, navigation, setLoader));
    }
  };

  const onLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <CommonHeader />

        <ImageBackground
          source={images.inputBackground}
          style={styles.inputBackground}>
          <CustomInput
            title="USERNAME"
            value={userName}
            onChangeText={value => {
              setUserName(value);
              setUserNameError(false);
            }}
          />
          {userNameError !== false && (
            <ErrorText text="please enter user name" style={styles.errortxt}
            />
          )}



          <CustomInput
            title="EMAIL"
            value={email}
            onChangeText={value => {
              setEmail(value);
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
            <ErrorText text="please enter valid email" style={styles.errortxt} />
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

          <CustomInput
            title="CONFERMA PASSWORD"
            value={confirmPassword}
            onChangeText={value => {
            setConfirmPassword(value);
            setCPasswordError(false);
          }}
          secureTextEntry={true}
        />
        {cPasswordError !== false && (
          <ErrorText text="please enter confirm password" style={styles.errortxt} />
        )}
        {wrongCPassError !== false && (
            <ErrorText text="please confirm the password" style={styles.errortxt} />
          )}
        </ImageBackground>

        <TouchableOpacity onPress={onRegisterPress}>
          <Image source={images.registerButton} style={styles.registerButton} />
        </TouchableOpacity>

        <View style={styles.loginButtonView}>
          <TouchableOpacity onPress={onLoginPress}>
            <Image source={images.loginButton} style={styles.loginButton} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={images.exitIcon} style={styles.ExitButton} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputBackground: {
    height: scale(315),
    width: scale(290),
    paddingVertical: scale(30),
    paddingHorizontal: scale(30),
  },
  loginButtonView: {
    flexDirection: 'row',
    marginTop: scale(10),
    justifyContent: 'space-between',
    width: scale(120),
  },
  loginButton: {
    height: scale(40),
    width: scale(74),
  },
  ExitButton: {
    height: scale(40),
    width: scale(50),
  },
  registerButton: {
    marginTop: scale(25),
    height: scale(40),
    width: scale(120),
  },
  errortxt: {
    marginTop: hp('0.5%'),
  },
});
