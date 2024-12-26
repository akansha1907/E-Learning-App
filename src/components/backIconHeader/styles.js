import {StyleSheet} from 'react-native';
import {BLACK} from '../../utils/colorConstants';
import {POPPINS_SEMIBOLD} from '../../assets/fonts';

export const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    tintColor: BLACK,
  },
  iconContainer: {alignSelf: 'flex-start', padding: 12},
  title: {
    fontSize: 17,
    color: BLACK,
    padding: 12,
    marginTop: 2,
    fontFamily: POPPINS_SEMIBOLD,
  },
  container: {flexDirection: 'row', alignItems: 'center'},
});
