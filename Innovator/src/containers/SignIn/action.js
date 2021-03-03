import {
  LOGIN_REQUESTED,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  UPDATE_INPUT,
  CLEAR_LOGIN,
} from './constants';
import {createAction} from '@reduxjs/toolkit';

export const loginRequest = createAction(LOGIN_REQUESTED);

export const requestSuccess = createAction(REQUEST_SUCCESS);

export const requestFailed = createAction(REQUEST_FAIL);

export const loginUpdateInput = createAction(UPDATE_INPUT);

export const clearLogin = createAction(CLEAR_LOGIN);
