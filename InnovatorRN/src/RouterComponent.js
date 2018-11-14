import { createStackNavigator } from 'react-navigation';
import SignIn from '../src/containers/onBoarding/SignIn';
import SignUp from '../src/containers/onBoarding/SignUp';
import Dashboard from '../src/containers/Home/Dashboard';
const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    Dashboard,
  },
  {
    headerMode: 'none',
  }
);
export default AuthStack;
