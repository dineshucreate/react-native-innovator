# react-native-innovator

## Getting Started
  Use [this setup guide](docs/PROJECT_SETUP.md) to setup the `Innovator` project on your local machine.

## Stack
- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Redux](https://redux.js.org/) a predictable state container for Javascript apps
- [Redux Saga](https://github.com/redux-saga/redux-saga) middleware for Redux
- [React Navigation](https://reactnavigation.org/) navigation for React Native
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for state management in functional components
- [react-native-config](https://github.com/luggit/react-native-config) for staging and production environments setup

## Common problems
  Most likely another process is already using this port. Run the following command to find out which process:

    lsof -n -i4TCP:8081

  You can either shut down the other process:

    kill -9 <PID>

  or run packager on a different port.

## Android notes:

1. To avoid any error like ``SDK location not found`` while running ``react-native run-android``, please open the project in Android Studio for the first time so that Android Studio could automatically insert the Android SDK path and other configuration settings.

2. To avoid error like: ``debug.keystore not found for signing config 'debug'``, run the following command in the ``android/app/`` directory of the project to generate a debug keystore file:

```bash
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```
