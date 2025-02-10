import {StyleSheet} from 'react-native';
import {POPPINS_REGULAR, POPPINS_SEMIBOLD} from '../../assets/fonts';
import {BLACK, GRAY_66, GRAY_LIGHT} from '../../utils/colorConstants';

export const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {
    fontSize: 20,
    fontFamily: POPPINS_SEMIBOLD,
    marginBottom: 10,
    color: BLACK,
  },
  timerContainer: {
    padding: 12,
    borderWidth: 0.8,
    gap: 7,
    borderColor: GRAY_66,
    borderRadius: 16,
    backgroundColor: GRAY_LIGHT,
    marginBottom: 14,
  },
  name: {fontFamily: POPPINS_REGULAR},
  not_task: {
    textAlign: 'center',
    marginTop: 50,
    fontFamily: POPPINS_REGULAR,
    fontSize: 12,
  },
});
