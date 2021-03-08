import {takeLatest} from 'redux-saga/effects';
import {onLoginRequested, onRequestSuccess} from './containers/SignIn/saga';
import {LOGIN_REQUESTED, REQUEST_SUCCESS} from './containers/SignIn/constants';

export default function* root() {
  yield takeLatest(LOGIN_REQUESTED, onLoginRequested);
  yield takeLatest(REQUEST_SUCCESS, onRequestSuccess);
}
