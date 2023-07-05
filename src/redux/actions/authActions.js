import axios from 'axios';
import {TEST} from '../../utils/ActionConstants';
import {
  BASE_URL,
  Register_Route,
  Login_Route,
  Shop_Route,
} from '../../utils/ApiService';
import * as ActionConstants from '../../utils/ActionConstants';

export const setComment = payload => {
  return {type: TEST, payload: payload};
};

export const setRegister = (registerData, navigation, setLoader) => {
  console.log(registerData);
  return (dispatch, getState) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(BASE_URL + Register_Route, registerData, {
        headers,
      })
      .then(response => {
        if (response.status === 201) {
          setLoader(false);
          navigation.navigate('Login');
          console.log(JSON.stringify(response?.data));
        }
      })
      .catch(error => {
        setLoader(false);
        console.log(error?.response?.request?._response);
      });
  };
};

export const setSoap = (navigation, setLoader, token) => {
  return (dispatch, getState) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(BASE_URL + Shop_Route, {
        headers,
      })
      .then(response => {
        if (response?.status === 200) {
          console.log(JSON.stringify(response?.data));
        }
      })
      .catch(error => {
        setLoader(false);
        console.log(error?.response?.request?._response);
      });
  };
};

export const setLogin = (loginData, navigation) => {
  return (dispatch, getState) => {
    console.log('called', loginData);

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(BASE_URL + Login_Route, loginData, {
        headers,
      })
      .then(response => {
        if (response?.status === 201) {
          dispatch({
            type: ActionConstants.USER_DETAILS,
            payload: response?.data,
          });
          console.log(JSON.stringify(response?.data));

          navigation.navigate('option');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
