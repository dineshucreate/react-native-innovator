import {combineReducers} from 'redux';
import loginReducer from './containers/SignIn/slice';

const appReducer = combineReducers({
  loginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT' || action.type === 'USER_PROFILE_CLEAR') {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
