import {getDeviceHeight, getDeviceWidth} from '../src/utils/commonFunctions';

jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn(() => ({height: 800, width: 400})),
  },
}));

describe('getDeviceHeight', () => {
  it('should return mocked window height', () => {
    expect(getDeviceHeight()).toBe(800);
  });

  it('should return new height based on device height', () => {
    expect(getDeviceHeight() * 4).toBe(3200);
  });
});

describe('getDeviceWidth', () => {
  it('should return mocked window width', () => {
    expect(getDeviceWidth()).toBe(400);
  });

  it('should return the updated window width based on the provided calculation', () => {
    expect(getDeviceWidth() * 0.2).toBe(80);
  });
});
