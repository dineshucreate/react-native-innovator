# react-native-innovator Beginner(Walker)

## Getting Started
1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project `git clone https://github.com/dineshucreate/react-native-innovator.git`
1. Run `npm install` from root directory
1. Start the app on emulator/simulator or physical devices

## Stack
- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Redux](http://rackt.github.io/redux/index.html) a predictable state container for Javascript apps
- [Redux Saga](https://github.com/redux-saga/redux-saga) middleware for Redux
- [Babel](http://babeljs.io/) for ES6+ support
- [React Navigation](https://github.com/react-community/react-navigation) navigation for React Native
- [React Native i18n](https://github.com/AlexanderZaytsev/react-native-i18n) i18n for Multilanguage 
- [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons) for buttons, logos and nav/tab bars 
- [ESLint](https://medium.com/the-react-native-log/getting-eslint-right-in-react-native-bd27524cc77b) for identifying and reporting on patterns found in ECMAScript/JavaScript code


## Common problems
  Most likely another process is already using this port
  Run the following command to find out which process:

    #### lsof -n -i4TCP:8081

  You can either shut down the other process:

    ####  kill -9 <PID>

  or run packager on different port.
