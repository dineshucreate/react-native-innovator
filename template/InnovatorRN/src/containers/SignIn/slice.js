import {Alert} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';

import {request} from '../../network/request';
import {sliceNames, urls} from '../../utilities/constants';
import {navigate} from '../../navigation/NavigationService';
import {screenNames} from '../../navigation/navigationConstants';

const {login} = sliceNames;

export const initialState = {
  loading: false,
  hasErrors: false,
  userData: {},
};

// A slice for login with our three reducers
const loginSlice = createSlice({
  name: login,
  initialState,
  reducers: {
    loggingIn: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, {payload: {userData}}) => {
      state.userData = userData;
      state.loading = false;
      state.hasErrors = false;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const {loggingIn, loginSuccess, loginFailure} = loginSlice.actions;

// A selector
export const userSelector = (state) => state.loginReducer.userData;

// The reducer
export default loginSlice.reducer;

// Asynchronous thunk action
export function loginRequest({email, password}) {
  return async (dispatch) => {
    dispatch(loggingIn());

    try {
      /* Please update the API call as per your need */
      const {data} = await request({
        url: `${urls.users}/1`,
      });

      dispatch(loginSuccess({userData: data}));
      navigate(screenNames.Dashboard);
    } catch (error) {
      Alert.alert('Error', JSON.stringify(error));
      dispatch(loginFailure());
    }
  };
}
