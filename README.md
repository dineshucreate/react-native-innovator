# <img src="https://media.giphy.com/media/w3Xk32k021sXJyFMIZ/giphy.gif" width="30" height="30" /> React Native Innovator Template

## Getting Started


Assuming that you have followed the [Initial Getting Started Guide](https://reactnative.dev/docs/environment-setup) for React-Native Environment Setup, follow the below steps to create a new project using the template.


---
**IMPORTANT NOTE**

The initialization command will fail if you have the global legacy `react-native-cli` installed on your system. Make sure you uninstall it first:

```bash
npm uninstall -g react-native-cli
```

or

```bash
yarn global remove react-native-cli
```

More info can be found at [react-native-community/cli](https://github.com/react-native-community/cli#about).

---

### Initializing a new project with React-Native v0.63.4

```bash
$ npx react-native init MyApp --template https://github.com/uCreateit/react-native-innovator.git
```

### Running the project
  Use [this](template/docs/PROJECT_SETUP.md) setup guide to run the project on your local machine.

## Tech Stack
- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript.
- [Redux](https://redux.js.org/) a predictable state container for Javascript apps.
- [Redux Toolkit](https://redux-toolkit.js.org/) a toolset for efficient Redux development.
- [React Navigation](https://reactnavigation.org/) for navigation.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) for state management in functional components.
- [react-native-config](https://github.com/luggit/react-native-config) for managing env variables. Refer to [this](https://ajaysidhu17.medium.com/configure-production-and-staging-environments-in-react-native-6c0d0faad034) article for staging and production environments setup details.
- [Appium](https://appium.io/) for e2e testing.
- [Jest](https://jestjs.io/) for TDD.
- [Bitrise](https://www.bitrise.io/) for CD and build automation.
- `Reviewee` for code review.
- [CircleCI](https://circleci.com/)(used along with `Reviewee`) for CI and build notifications. Refere to [this](template/docs/REVIEWEE_CIRCLE_CI_CONFIG.md) doc for setting up the build notifications.

## Android notes:

1. To avoid any error like ``SDK location not found`` while running ``react-native run-android``, please open the project in Android Studio for the first time so that Android Studio could automatically insert the Android SDK path and other configuration settings.

2. To avoid error like: ``debug.keystore not found for signing config 'debug'``, run the following command in the ``android/app/`` directory of the project to generate a debug keystore file:

```bash
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

## Commiting your changes
1. Make sure, that you have installed project dependencies so that the git hooks can do their job.
2. Write proper commit message. See how a minor change to your commit message style can make you a better programmer.
   
   ---
   `fixed sha <commit_sha>` to fix the rejected Reviewee commit

   or

   ```
   <type>: <description>

   [trello card link]
   ```
   ---
   The type can be one of:

   - `feat`: (new feature for the user, not a new feature for build script)
   - `fix`: (bug fix for the user, not a fix to a build script)
   - `docs`: (changes to the documentation)
   - `chore`: (updating grunt tasks etc; no production code change)

   Example:

   ```
   chore: update bitrise step versions

   https://trello.com/c/XuDkkdXX
   ```

   See [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) for more information.

3. The Git Hooks run below tasks before commiting the code:
      - check ESLint errors
      - check commit message format
      - run test cases
      - check forbidden words

    If any git hook returns error, please fix the error and then try commiting again.