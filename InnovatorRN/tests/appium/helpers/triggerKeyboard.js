export default async (driver, platform, element) => {
  if (platform === 'ios') {
    await element.click();
    await driver.waitForElementByAccessibilityId('w', 6000);
  }
};
