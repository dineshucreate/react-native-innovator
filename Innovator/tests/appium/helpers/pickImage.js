export default async (driver, PlatformOS) => {
  if (PlatformOS === 'ios') {
    await driver.waitForElementByXPath(
      "//XCUIElementTypeButton[@name='Choose from Library...']",
      3000,
    );
    const chooseFromLibrary = await driver.elementByXPath(
      "//XCUIElementTypeButton[@name='Choose from Library...']",
    );
    chooseFromLibrary.click();
    await driver.waitForElementByXPath(
      "//XCUIElementTypeImage[@name='Photo, October 09, 2009, 11:09 PM']",
      20000,
    );
    const pickedImage = await driver.elementByXPath(
      "//XCUIElementTypeImage[@name='Photo, October 09, 2009, 11:09 PM']",
    );
    pickedImage.click();
    return;
  }
  await driver.waitForElementByXPath(
    "//android.widget.Button[@content-desc='Take Photo...']",
    3000,
  );
  const takePhoto = await driver.elementByXPath(
    "//android.widget.Button[@content-desc='Take Photo...']",
  );
  takePhoto.click();
  await driver.waitForElementByXPath(
    "//android.widget.ImageView[@content-desc='Shutter']",
    5000,
  );
  const Shutter = await driver.elementByXPath(
    "//android.widget.ImageView[@content-desc='Shutter']",
  );
  Shutter.click();
  await driver.sleep(3000);
  await driver.waitForElementByXPath(
    "//android.widget.ImageButton[@content-desc='Done']",
    3000,
  );
  const Done = await driver.elementByXPath(
    "//android.widget.ImageButton[@content-desc='Done']",
  );
  Done.click();
};
