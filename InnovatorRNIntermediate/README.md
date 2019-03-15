# react-native-innovator Intermediate(Hiker)

## Getting Started
1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project `git clone https://github.com/dineshucreate/react-native-innovator.git`
1. Run `npm install` from root directory
1. Start the app on emulator/simulator or physical devices

## Stack
- [Push Notifications](https://rnfirebase.io/docs/v5.x.x/notifications/introduction) push notification for mobile apps.
- [Navigation Drawer](https://reactnavigation.org/docs/en/drawer-navigator.html) provide navigation drawer for mobile apps.
- [Tab Navigator](https://reactnavigation.org/docs/en/bottom-tab-navigator.html) to switch between different routes.
- [Firebase Crashlytics](https://rnfirebase.io/docs/v5.x.x/crashlytics) to better JS Error reporting and crash log.
- [Camera And Gallery](https://github.com/react-native-community/react-native-image-picker) to access mobile camera and gallery.
- [Firebase Analytics](https://rnfirebase.io/docs/v5.x.x/analytics) automatically captures certain key events and user properties.
- [Internet Connectivity Check](https://facebook.github.io/react-native/docs/netinfo) exposes info about online/offline status.
- [Shared element transitions](https://github.com/fram-x/FluidTransitions) for building fluid transitions between elements when navigating with React Navigation.


## Common problems
  Most likely another process is already using this port
  Run the following command to find out which process:

    #### lsof -n -i4TCP:8081

  You can either shut down the other process:

    ####  kill -9 <PID>

  or run packager on different port.
