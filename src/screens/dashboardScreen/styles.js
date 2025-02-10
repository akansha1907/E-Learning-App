import {StyleSheet} from 'react-native';
import {
  BLACK,
  GRAY_B5,
  GRAY_LIGHT,
  RED_COLOR,
  SKY_BLUE,
  WHITE,
} from '../../utils/colorConstants';
import {
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  categoryContainer: {
    marginBottom: 5,
    padding: 16,
  },
  categoryTitle: {
    fontSize: 20,
    color: BLACK,
    fontFamily: POPPINS_SEMIBOLD,
  },
  addButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: SKY_BLUE,
    padding: 13,
    elevation: 4,
    shadowColor: GRAY_LIGHT,
    borderRadius: 50,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: POPPINS_MEDIUM,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: POPPINS_SEMIBOLD,
    color: BLACK,
    marginBottom: 10,
  },
  input: {
    borderColor: GRAY_B5,
    borderWidth: 0.8,
    borderRadius: 10,
    fontFamily: POPPINS_REGULAR,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  cancelBtn: {backgroundColor: SKY_BLUE},
  error: {color: RED_COLOR, fontSize: 12, marginBottom: 5},
  food_finished: {marginVertical: 20},
  not_task: {textAlign: 'center', marginTop: 30},
  categoryView: {flexDirection: 'row', gap: 8, alignItems: 'center'},
  expand_img: expand => ({
    height: 13,
    width: 13,
    transform: [{rotate: expand ? '180deg' : '0deg'}],
  }),
  expandView: {backgroundColor: GRAY_LIGHT, padding: 4, borderRadius: 20},
});
