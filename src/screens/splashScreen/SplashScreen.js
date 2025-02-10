import {View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import {TAB_NAVIGATOR} from '../../utils/constants';
import {StackActions} from '@react-navigation/native';
const SplashScreen = navigation => {
  useEffect(() => {
    setTimeout(() => {
      //dispatch the tab navigator instead of navigate, so that user will not see splash screen when pressing back i.e. to remove splash screen from stack
      navigation.navigation.dispatch(StackActions.replace(TAB_NAVIGATOR));
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie.json')}
        style={styles.image}
        autoPlay //to play video file automatically
      />
    </View>
  );
};

export default SplashScreen;
