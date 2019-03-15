import { createStackNavigator, createAppContainer } from "react-navigation";
import SignIn from "../src/containers/onBoarding/SignIn";
import SignUp from "../src/containers/onBoarding/SignUp";
import NavigationDrawer from "./containers/DashBoard/NavigationDrawer";
const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    NavigationDrawer
  },
  {
    headerMode: "none"
  }
);
export default createAppContainer(AuthStack);
