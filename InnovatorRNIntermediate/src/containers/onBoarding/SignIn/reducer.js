import {
    LOGIN_REQUESTED,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    UPDATE_INPUT,
    CLEAR_LOGIN,
  } from './constants';

const INITIAL_STATE = {
  loginData: {},
  loading: false,
  error: null,
  loginDetails: {
    email: '',
    passwordLogin: '',
  },
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        loginData: action.data,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        isError: true,
      };
    case UPDATE_INPUT:
      return {
        ...state,
        loginDetails: { ...state.loginDetails, [action.key]: action.value },
      };

    case CLEAR_LOGIN:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
