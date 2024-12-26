import {StyleSheet} from 'react-native';
import {POPPINS_REGULAR, POPPINS_SEMIBOLD} from '../../assets/fonts';
import {
  BLACK,
  GRAY_66,
  PRIMARY_APP_COLOR,
  WHITE,
} from '../../utils/colorConstants';
import {getDeviceHeight} from '../../utils/commonFunctions';

export const styles = StyleSheet.create({
  container: {flex: 1},
  image: {height: getDeviceHeight() * 0.14, width: '55%', borderRadius: 8},
  flatList: {marginHorizontal: 16},
  courseView: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  contentView: {flexDirection: 'row'},
  titleView: {flex: 1},
  title: {
    fontFamily: POPPINS_SEMIBOLD,
    color: BLACK,
    paddingTop: 14,
    paddingHorizontal: 12,
  },
  buttonStyle: {
    backgroundColor: WHITE,
    borderWidth: 1,
    paddingVertical: 0,
    marginHorizontal: 10,
    borderColor: PRIMARY_APP_COLOR,
    marginTop: 10,
  },
  textStyle: {
    color: PRIMARY_APP_COLOR,
    padding: 4,
    fontSize: 12,
    fontFamily: POPPINS_SEMIBOLD,
  },
  emptyCourse: {color: GRAY_66, fontFamily: POPPINS_REGULAR},
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
