import {StyleSheet} from 'react-native';
import {PRIMARY_APP_COLOR, WHITE} from '../../utils/colorConstants';
import {POPPINS_BOLD, POPPINS_REGULAR} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_APP_COLOR,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {color: WHITE, fontSize: 22, fontFamily: POPPINS_BOLD},
  subTitle: {
    color: WHITE,
    fontSize: 12,
    marginTop: 5,
    fontFamily: POPPINS_REGULAR,
  },
  image: {height: 26, width: 26, tintColor: WHITE},
});
