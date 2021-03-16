export default async (driver, testId, waitTime = 5000) => {
  await driver.waitForElementByAccessibilityId(testId, waitTime);
  return await driver.elementByAccessibilityId(testId);
};
