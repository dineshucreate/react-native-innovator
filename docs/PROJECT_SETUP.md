# Setup Guide

This guide will walk you through the different steps to setup the project on your local machine. If you will find any screenshot to be blurry, just tap on the screenshot. It will open up in a new tab with full sized image.

Assuming that you have followed up the [Initial Getting Started Guide](https://reactnative.dev/docs/environment-setup) for React-Native Environment Setup, follow the below steps to setup the application on your local system:


1. Cloning the repository
  
      `git clone https://github.com/uCreateit/react-native-innovator`

2. Switching to the project folder
  
      `cd react-native-innovator/Innovator`

3. Installing the `node_modules`
  
      `yarn install`

4. Installing the pods (iOS only)
  
      `cd ios && pod install && cd ..`

5. Running the builds
      We can run the android and iOS builds either from the command-line or from the Android Studio and Xcode.


    5.1 Running from the command-line

      Use the following scripts(added into the `package.json` file) to run the andorid and iOS apps
      * `yarn iosStagingDebug` for staging debug on iOS
      * `yarn iosProductionDebug` for production debug on iOS
      * `yarn androidStagingDebug` for staging debug on android
      * `yarn androidProductionDebug` for production debug on android


    5.2 To run the android build from the Android Studio

      * Open the `Android Studio`
      * Select the `Open an existing Android Studio Project`


      <p align="center">
        <img height="400" alt="Android-Studio-Landing-Page" src="./docs/../images/projectSetup/open_existing_project.png">
      </p>


      * Choose the `android` folder under the path `react-native-innovator/Innovator/android` as shown in the screenshot below:


      <p align="center">
        <img height="400" alt="Choose-Android-Folder" src="./docs/../images/projectSetup/select_android_folder.png">
      </p>

      * Wait for the `gradle` to sync and all of the sync process to be finished


      <p align="center">
        <img height="400" alt="Syncing-Gradle-Process" src="./docs/../images/projectSetup/wait_for_gradle_to_sync.png">
      </p>

      * From the left pannel, look for the `Build Varients` and select the `Build Varients` option

      <p align="center">
        <img height="400" alt="Look-For-Build-Varients" src="./docs/../images/projectSetup/select_build_varient.png">
      </p>

      * Select the desired build varient(`stagingDebug` or `productionDebug` for debug builds and `stagingRelease` or `productionRelease` for release builds) from the `app` module's `Active Build Varient` as shown in the screenshot below:

      <p align="center">
        <img height="350" alt="tap-on-drop-down" src="./docs/../images/projectSetup/tap_on_drop_down.png">
      </p>

      <p align="center">
        <img height="350" alt="Select-build-varient" src="./docs/../images/projectSetup/select_desired_varient.png">
      </p>

      * After selecting the build variant, the `gradle` will sync again. After finishing up the sync of the gradle, you can run your build directly from the `run` option from the top tab-bar in the Android Studio:

      <p align="center">
        <img alt="run-the-app" src="./docs/../images/projectSetup/run_android_build.png">
      </p>

      * The selected emulator will start and the build will run in the emulator


      5.3 To run the iOS build using the Xcode

      * Go to the `react-native-innovator/Innovator/ios/` directory.
      * Open the file `InnovatorRN.xcworkspace`. Remember, **DO NOT** open the `InnovatorRN.xcodeproj` by mistake.
  
      <p align="center">
        <img height="400" alt="choose-right-xcode-file" src="./docs/../images/projectSetup/open_xworkspace.png">
      </p>

      * Tap on the default pre-selected scheme as shown in the screenshot below

      <p align="center">
        <img alt="select-scheme" src="./docs/../images/projectSetup/default_preselected_scheme.png">
      </p>

      * Select the desired scheme (`InnovatorRN_Staging` for the Staging and `InnovatorRN_Production` for Production)

      <p align="center">
        <img alt="select-scheme" src="./docs/../images/projectSetup/select_desired_scheme.png">
      </p>

      * Hit the `Run` button

      <p align="center">
        <img alt="select-scheme" src="./docs/../images/projectSetup/hit_run_button_from_xcode.png">
      </p>

      * The selected simulator will start and the build will run in the simulator.
