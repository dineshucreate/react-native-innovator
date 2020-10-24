# react-native-innovator

## Getting Started
1. Ensure you've followed the [React Native - Get Started Guide](https://reactnative.dev/docs/getting-started.html)
1. Clone this project `git clone https://github.com/uCreateit/react-native-innovator.git`
1. Run `npm install` from root directory
1. Start the app in an emulator

## Stack
- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Redux](https://redux.js.org/) a predictable state container for Javascript apps
- [Redux Saga](https://github.com/redux-saga/redux-saga) middleware for Redux
- [Babel](http://babeljs.io/) for ES6+ support
- [React Navigation](https://reactnavigation.org/) navigation for React Native
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for state management in functional components

## Common problems
  Most likely another process is already using this port
  Run the following command to find out which process:

    #### lsof -n -i4TCP:8081

  You can either shut down the other process:

    ####  kill -9 <PID>

  or run packager on different port.

## Android notes:

1. To avoid any error like ``SDK location not found`` while running ``react-native run-android``, please open the project in Android Studio for the first time so that Android Studio could automatically insert the Android SDK path and other configuration settings.

2. To avoid error like: ``debug.keystore not found for signing config 'debug'``, run the following command in the ``android/app/`` directory of the project to generate a debug keystore file:

``keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000``
