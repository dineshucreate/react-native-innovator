import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN_REQUESTED, REQUEST_SUCCESS } from './constants';

function* onLoginRequested({ email, passwordLogin, navigator }) {
  alert('Login Successfully');
  navigator.navigate('Dashboard');
}
function* onRequestSuccess({ data, navigator }) {

}
function* sagaLogin() {
  yield takeEvery(LOGIN_REQUESTED, onLoginRequested);
  yield takeEvery(REQUEST_SUCCESS, onRequestSuccess);
}
export default sagaLogin;
