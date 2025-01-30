import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRIMARY_APP_COLOR} from '../../utils/colorConstants';
import {getDeviceHeight} from '../../utils/commonFunctions';

const HeaderDark = () => {
  return <View style={styles.view} />;
};

export default HeaderDark;

const styles = StyleSheet.create({
  view: {
    backgroundColor: PRIMARY_APP_COLOR,
    height: getDeviceHeight() * 0.2,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
