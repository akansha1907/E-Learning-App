import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  COURSE_DETAILS,
  DASHBOARD_SCREEN,
  SPLASH_SCREEN,
  TAB_NAVIGATOR,
} from '../utils/constants';
import DashboardScreens from '../screens/dashboardScreen/DashboardScreens';
import CourseDetail from '../screens/courseDetails/CourseDetail';
import BottomTabNavigator from './BottomTabNavigator';
import SplashScreen from '../screens/splashScreen/SplashScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SPLASH_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={TAB_NAVIGATOR} component={BottomTabNavigator} />
        <Stack.Screen name={DASHBOARD_SCREEN} component={DashboardScreens} />
        <Stack.Screen name={COURSE_DETAILS} component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
