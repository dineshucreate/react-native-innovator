import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SignIn from '../src/containers/SignIn';
import SignUp from '../src/containers/SignUp';
import Dashboard from '../src/containers/Dashboard';
import {screenNames} from '../navigation/navigationConstants';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <AuthStack.Screen
      name={screenNames.SignIn}
      component={SignIn}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name={screenNames.SignUp}
      component={SignUp}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name={screenNames.Dashboard}
      component={Dashboard}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
