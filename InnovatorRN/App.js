import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import RouterContent from './src/RouterComponent';

export default class RouterComponent extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <RouterContent />
      </Provider >
    );
  }
}
