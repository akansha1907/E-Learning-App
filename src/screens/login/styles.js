import {StyleSheet} from 'react-native';
import {PRIMARY_APP_COLOR, WHITE} from '../../utils/colorConstants';
import {getDeviceHeight} from '../../utils/commonFunctions';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE},
  card: {
    marginHorizontal: 40,
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: WHITE,
    marginTop: -getDeviceHeight() * 0.06,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonContainer: {flexDirection: 'row', gap: 10},
  button: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 25,
    flex: 1,
  },
  whiteBtn: {
    backgroundColor: WHITE,
    borderWidth: 2,
    borderColor: PRIMARY_APP_COLOR,
  },
  textStyle: {color: PRIMARY_APP_COLOR, fontWeight: '700'},
  textStyle2: {fontWeight: '700'},
});
