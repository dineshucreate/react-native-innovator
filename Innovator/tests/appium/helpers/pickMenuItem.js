import wd from 'wd';
export default async (driver, PlatformOS) => {
  if (PlatformOS === 'ios') {
    const action = new wd.TouchAction(driver);
    let {height} = await driver.getWindowSize();

    await driver.sleep(1000);
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
    const Done = await driver.elementByXPath(
      "//XCUIElementTypeOther[@name='Done']",
    );
    Done.click();
    return;
  }
  await driver.waitForElementByXPath(
    "//android.widget.CheckedTextView[@index='1']",
    8000,
  );
  const choice = await driver.elementByXPath(
    "//android.widget.CheckedTextView[@index='1']",
  );
  choice.click();
};
