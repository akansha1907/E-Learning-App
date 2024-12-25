import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  COURSE_DETAILS,
  DASHBOARD_SCREEN,
  TAB_NAVIGATOR,
} from '../utils/constants';
import DashboardScreens from '../screens/dashboardScreen/DashboardScreens';
import CourseDetail from '../screens/courseDetails/CourseDetail';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={TAB_NAVIGATOR}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={TAB_NAVIGATOR} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
