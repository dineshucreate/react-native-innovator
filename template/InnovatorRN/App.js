import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from './src/store';
import RouterContent from './src/RouterComponent';
import {navigationRef} from './navigation/NavigationService';

const App = () => (
  <NavigationContainer ref={navigationRef}>
    <Provider store={store}>
      <RouterContent />
    </Provider>
  </NavigationContainer>
);

export default App;
