import {StyleSheet} from 'react-native';
import {getDeviceHeight} from '../../utils/commonFunctions';
import {BLACK, SKY_BLUE, WHITE} from '../../utils/colorConstants';
import {POPPINS_MEDIUM, POPPINS_REGULAR} from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1},
  loaderView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '94%',
    height: getDeviceHeight() * 0.28,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  contentView: {marginHorizontal: 16, marginTop: 20},
  durationText: {
    color: SKY_BLUE,
    fontSize: 12,
    padding: 2,
    fontFamily: POPPINS_MEDIUM,
  },
  durationView: {
    backgroundColor: '#ebf3fd',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  title: {fontSize: 16, fontFamily: POPPINS_MEDIUM, color: BLACK},
  desc: {fontSize: 12, fontFamily: POPPINS_REGULAR, color: BLACK},
  about: {
    fontSize: 14,
    fontFamily: POPPINS_MEDIUM,
    color: BLACK,
    marginTop: 20,
  },
  titleView: {flexDirection: 'row', justifyContent: 'space-between'},
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
  buttonStyle: {width: '100%'},
  bottomContainer: {
    backgroundColor: WHITE,
    padding: 16,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    width: '100%',
    elevation: 5,
  },
});
