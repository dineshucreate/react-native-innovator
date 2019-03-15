import {
    LOGIN_REQUESTED,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    UPDATE_INPUT,
    CLEAR_LOGIN,
  } from './constants';
export const loginRequest = (email, password, navigator) => ({
  type: LOGIN_REQUESTED,
  email,
  password,
  navigator,
});
export const requestSuccess = (data, navigator) => ({
  type: REQUEST_SUCCESS,
  data,
  navigator,
});
export const requestFailed = (error) => ({
  type: REQUEST_FAIL,
  error,
});
export const loginUpdateInput = (key, value) => ({
  type: UPDATE_INPUT,
  key,
  value,
});
export const clearLogin = (isError) => ({
  type: CLEAR_LOGIN,
  isError,
});

