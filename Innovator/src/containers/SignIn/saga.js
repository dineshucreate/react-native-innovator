import {put} from 'redux-saga/effects';
import {screenNames} from '../../../navigation/navigationConstants';
import {navigate} from '../../../navigation/NavigationService';
import {requestSuccess} from './action';
export function* onLoginRequested(props) {
  alert('Login Successfully');
  yield put(requestSuccess(props.payload));
}
export function* onRequestSuccess() {
  navigate(screenNames.Dashboard);
}
