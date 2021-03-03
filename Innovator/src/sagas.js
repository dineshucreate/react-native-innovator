import {all} from 'redux-saga/effects';
import loginSaga from './containers/SignIn/saga';

const root = function* rootSaga() {
  yield all([loginSaga()]);
};

export default root;
