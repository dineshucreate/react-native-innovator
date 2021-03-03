import wd from 'wd';
import {testIds} from '../../../src/utilities/Constants/appConstants';
export default async (driver, PlatformOS) => {
  if (PlatformOS === 'ios') {
    const action = new wd.TouchAction(driver);
    let {height} = await driver.getWindowSize();
    await driver.waitForElementByAccessibilityId(testIds.datePicker, 5000);
    await action
      .press({x: 50, y: height - 10})
      .wait(1000)
      .moveTo({x: 50, y: height - 80})
      .release();
    await action.perform();
    await driver.waitForElementByXPath(
      "//XCUIElementTypeOther[@name='Done']",
      8000,
    );
    const dateDone = await driver.elementByXPath(
      "//XCUIElementTypeOther[@name='Done']",
    );
    dateDone.click();
    return;
  }
  await driver.waitForElementByXPath(
    "//android.widget.Button[@text='OK']",
    3000,
  );
  const OK = await driver.elementByXPath("//android.widget.Button[@text='OK']");
  OK.click();
};
