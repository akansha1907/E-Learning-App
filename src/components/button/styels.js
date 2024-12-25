import {StyleSheet} from 'react-native';
import {PRIMARY_APP_COLOR, WHITE} from '../../utils/colorConstants';
import {POPPINS_MEDIUM, POPPINS_SEMIBOLD} from '../../assets/fonts';

export const styles = StyleSheet.create({
  btnText: {
    color: WHITE,
    fontSize: 14,
    fontFamily: POPPINS_MEDIUM,
    padding: 6,
  },
  btnContainer: {
    backgroundColor: PRIMARY_APP_COLOR,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 12,
  },
});
