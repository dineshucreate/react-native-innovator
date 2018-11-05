import { fork } from 'redux-saga/effects';
import loginSaga from './containers/onBoarding/SignIn/saga';

const root = function* rootSaga() {
  yield [
    fork(loginSaga),
  ];
};

export default root;
