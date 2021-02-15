import {testIds} from '../../../src/utilities/Constants';
import getElement from '../helpers/getElement';
export default (driver) => {
  test('check Item availability', async () => {
    await getElement(driver, testIds.abiBaseURL);
  });
};
