import {
  loginRequest,
  requestFailed,
  requestSuccess,
  loginUpdateInput,
  clearLogin,
} from './action';
import {createReducer} from '@reduxjs/toolkit';
const INITIAL_STATE = {
  loginData: {},
  loading: false,
  error: null,
  isError: false,
  loginDetails: {
    email: '',
    passwordLogin: '',
  },
};

export const loginReducer = createReducer(INITIAL_STATE, {
  [loginRequest.type]: (state, action) => {
    state.loading = true;
  },
  [requestSuccess.type]: (state, action) => {
    (state.loading = false), (state.loginData = action.payload);
  },
  [requestFailed.type]: (state, action) => {
    const {error} = action.payload;
    (state.loading = false), (state.error = error), (state.isError = true);
  },
  [loginUpdateInput.type]: (state, action) => {
    const {key, value} = action.payload;
    state.loginDetails[key] = value;
  },
  [clearLogin.type]: (state, action) => {
    state.error = '';
  },
});
