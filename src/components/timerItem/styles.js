import {StyleSheet} from 'react-native';
import {BLACK, GRAY_LIGHT} from '../../utils/colorConstants';
import {POPPINS_REGULAR, POPPINS_SEMIBOLD} from '../../assets/fonts';

export const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: GRAY_LIGHT,
    padding: 12,
    borderRadius: 12,
    marginTop: 16,
  },
  progressBar: {
    height: 8,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 10,
    borderRadius: 8,
  },
  name: {color: BLACK, fontFamily: POPPINS_SEMIBOLD, marginBottom: 8},
  remaining: {fontFamily: POPPINS_REGULAR, fontSize: 13},
  status_bar: (remainingTime, duration) => ({
    width: `${(remainingTime / duration) * 100}%`,
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 8,
  }),
  timerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});
