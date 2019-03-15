import { takeEvery, put, call } from "redux-saga/effects";
import { LOGIN_REQUESTED, REQUEST_SUCCESS } from "./constants";

function* onLoginRequested({ email, passwordLogin, navigator }) {
  navigator.navigate("NavigationDrawer");
}
function* onRequestSuccess({ data, navigator }) {}
function* sagaLogin() {
  yield takeEvery(LOGIN_REQUESTED, onLoginRequested);
  yield takeEvery(REQUEST_SUCCESS, onRequestSuccess);
}
export default sagaLogin;
