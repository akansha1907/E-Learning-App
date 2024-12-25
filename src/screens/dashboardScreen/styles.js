import {StyleSheet} from 'react-native';
import {BLACK} from '../../utils/colorConstants';
import {POPPINS_MEDIUM} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1},
  category: {
    color: BLACK,
    fontFamily: POPPINS_MEDIUM,
    margin: 16,
    fontSize: 16,
  },
});
