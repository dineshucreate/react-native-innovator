import { combineReducers } from 'redux';
import LoginReducer from './containers/onBoarding/SignIn/reducer';

const appReducer = combineReducers({
  loginReducer: LoginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT' || action.type === 'USER_PROFILE_CLEAR') {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
