const wd = require('wd');
import CheckElement from './scenarios/checkItem.appium.spec';
import {e2eAndroidConfig, e2eiOSConfig} from './AppiumConfig';
const PORT = 4723;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let config = process.env.TESTING_OS === 'ios' ? e2eiOSConfig : e2eAndroidConfig;
let platform = process.env.TESTING_OS || 'android';
const driver = process.env.BROWSERSTACK_APP_URL
  ? wd.promiseChainRemote('http://hub-cloud.browserstack.com/wd/hub')
  : wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config());
});

afterAll(async () => {
  await driver.sleep(5000);
  await driver.quit();
});

describe('Logged user context', () => {
  CheckElement(driver, platform);
});
