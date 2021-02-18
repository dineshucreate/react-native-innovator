import path from 'path';
import fs from 'fs';
import os from 'os';
import dotenv from 'dotenv';

dotenv.config();
const homedir = os.homedir();

const xcodeDir =
  process.env.APPIUM_XCODE_PATH || `${homedir}/Library/Developer/Xcode`;
const iOSVersion = process.env.APPIUM_IOS_VERSION || '14';
const androidVersion = process.env.APPIUM_ANDROID_VERSION || '10.0';
const customIOSAppPath =
  process.env.BROWSERSTACK_APP_URL || process.env.APPIUM_IOS_APP_PATH;
const customAndroidAppPath =
  process.env.BROWSERSTACK_APP_URL || process.env.APPIUM_ANDROID_APP_PATH;
const deviceName = process.env.APPIUM_DEVICE_NAME || 'emulator-5554';
const getIOSAppPath = () => {
  const isDirectory = (source) => fs.lstatSync(source).isDirectory();
  const getDirectories = (source) =>
    fs
      .readdirSync(source)
      .map((name) => path.join(source, name))
      .filter(isDirectory);

  const appDir = getDirectories(`${xcodeDir}/DerivedData`).find(
    (dir) => dir.indexOf('TestedMeStaging') !== -1,
  );

  return `${appDir}/Build/Products/Staging.Debug-iphonesimulator/InnovatorRN-Staging.app`;
};

export const e2eiOSConfig = () => {
  const configiOS = {
    'browserstack.user': process.env.BROWSER_STACK_USERNAME,
    'browserstack.key': process.env.BROWSER_STACK_PASSWORD,
    platformName: 'iOS',
    os_version: iOSVersion,
    real_mobile: true,
    deviceName: 'iPhone 11 Pro Max',
    automationName: 'XCUITest',
    autoAcceptAlerts: true,
    project: 'First NodeJS project',
    build: 'Node Android',
    name: 'Appium Tests',
    app: customIOSAppPath || getIOSAppPath(),
  };
  return configiOS;
};

export const e2eAndroidConfig = () => {
  const configAndroid = {
    'browserstack.user': process.env.BROWSER_STACK_USERNAME,
    'browserstack.key': process.env.BROWSER_STACK_PASSWORD,
    device: deviceName,
    platformName: 'Android',
    os_version: androidVersion,
    autoGrantPermissions: true,
    project: 'First NodeJS project',
    build: 'Node Android',
    name: 'Appium Tests',
    app:
      customAndroidAppPath ||
      path.join(
        __dirname,
        '../../android/app/build/outputs/apk/production/debug/app-production-debug.apk',
      ),
  };
  return configAndroid;
};
