import {StyleSheet} from 'react-native';
import {BLACK} from '../../utils/colorConstants';
import {POPPINS_MEDIUM} from '../../assets/fonts';

export const styles = StyleSheet.create({
  category: {
    color: BLACK,
    fontFamily: POPPINS_MEDIUM,
    margin: 16,
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timerContainer: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 50,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
