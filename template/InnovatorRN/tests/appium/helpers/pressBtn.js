export default async (
  driver,
  PlatformOS,
  btnText,
  element = 'XCUIElementTypeOther',
) => {
  if (PlatformOS === 'ios') {
    await driver.waitForElementByXPath(
      `//${element}[@name='${btnText}']`,
      3000,
    );
    const done = await driver.elementByXPath(
      `//${element}[@name='${btnText}']`,
    );
    done.click();
    return;
  }
  await driver.waitForElementByXPath(
    `//android.widget.TextView[@text='${btnText}']`,
    20000,
  );
  const Save = await driver.elementByXPath(
    `//android.widget.TextView[@text='${btnText}']`,
  );
  Save.click();
};
