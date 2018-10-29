import { fork } from 'redux-saga/effects';
import loginSaga from './containers/OnBoarding/Login/saga';

const root = function* rootSaga() {
  yield [
    fork(loginSaga),
  ];
};

export default root;
