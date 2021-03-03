import {scale} from '../src/utilities/scale';

describe('device scale measurement', () => {
  it('should get the device scale', () => {
    const deviceScale = scale(350);
    expect(deviceScale).toEqual(750);
  });
});
