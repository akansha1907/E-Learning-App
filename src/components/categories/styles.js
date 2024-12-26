import {StyleSheet} from 'react-native';
import {getDeviceHeight} from '../../utils/commonFunctions';
import {
  BLACK,
  GRAY_66,
  PRIMARY_APP_COLOR,
  SKY_BLUE,
  WHITE,
} from '../../utils/colorConstants';
import {POPPINS_MEDIUM, POPPINS_REGULAR} from '../../assets/fonts';

export const styles = StyleSheet.create({
  title: {fontSize: 15, fontFamily: POPPINS_MEDIUM, color: BLACK},
  desc: {fontSize: 12, fontFamily: POPPINS_REGULAR, color: BLACK},
  itemContainer: index => ({
    marginTop: 14,
    backgroundColor: WHITE,
    borderRadius: 14,
    overflow: 'hidden',
  }),
  image: {
    width: '94%',
    height: getDeviceHeight() * 0.2,
    resizeMode: 'stretch',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 14,
  },
  textContainer: {paddingBottom: 10, paddingHorizontal: 16},
  flatList: {
    marginHorizontal: 16,
    paddingBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    gap: 8,
  },
  categoryBtn: selected => ({
    backgroundColor: selected ? PRIMARY_APP_COLOR : WHITE,
    borderColor: selected ? PRIMARY_APP_COLOR : GRAY_66,
    borderRadius: 10,
    borderWidth: 0.8,
    marginBottom: 8,
  }),
  categoryText: selected => ({
    color: selected ? WHITE : GRAY_66,
    fontFamily: POPPINS_REGULAR,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  }),
  loader: {justifyContent: 'center', alignItems: 'center', flex: 1},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  starImage: {height: 16, width: 16, marginLeft: 5},
  ratingText: {
    fontSize: 12,
    color: BLACK,
    fontFamily: POPPINS_MEDIUM,
    marginTop: 5,
  },
  durationText: {
    color: SKY_BLUE,
    fontSize: 12,
    padding: 2,
    fontFamily: POPPINS_MEDIUM,
  },
  durationView: {
    backgroundColor: '#ebf3fd',
    borderRadius: 6,
    paddingHorizontal: 6,
  },
});
