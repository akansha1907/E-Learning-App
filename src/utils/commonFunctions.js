import {Dimensions} from 'react-native';

export const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};
export const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};
export const sum = (a, b) => {
  return a + b;
};
