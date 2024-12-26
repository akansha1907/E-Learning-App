import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {DASHBOARD_SCREEN, MY_COURSES} from '../utils/constants';
import DashboardScreens from '../screens/dashboardScreen/DashboardScreens';
import {PRIMARY_APP_COLOR, WHITE} from '../utils/colorConstants';
import {POPPINS_REGULAR} from '../assets/fonts';
import {getDeviceWidth} from '../utils/commonFunctions';
import MyEnrolledCourses from '../screens/myEnrolledCourses/MyEnrolledCourses';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: WHITE,
          height: 84,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: POPPINS_REGULAR,
        },
        tabBarItemStyle: {
          borderRadius: 10,
          marginHorizontal: 10,
          marginTop: -18,
        },
      })}>
      <Tab.Screen
        name={DASHBOARD_SCREEN}
        component={DashboardScreens}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={[
                styles.tabContainer,
                {backgroundColor: focused ? PRIMARY_APP_COLOR : WHITE},
              ]}>
              <Image
                source={require('../assets/images/home.png')}
                style={[styles.image, {tintColor: focused ? '#fff' : '#000'}]}
              />
              <Text style={[styles.label, {color: focused ? WHITE : '#000'}]}>
                Home
              </Text>
            </View>
          ),
          tabBarIcon: () => {
            return null; //to hide default icon, so that it not conflicts with custom icon
          },
        }}
      />
      <Tab.Screen
        name={MY_COURSES}
        component={MyEnrolledCourses}
        options={{
          tabBarLabel: ({focused}) => (
            <View
              style={[
                styles.tabContainer,
                {backgroundColor: focused ? PRIMARY_APP_COLOR : WHITE},
              ]}>
              <Image
                source={require('../assets/images/open-book.png')}
                style={[styles.image, {tintColor: focused ? '#fff' : '#000'}]}
              />
              <Text style={[styles.label, {color: focused ? WHITE : '#000'}]}>
                My Courses
              </Text>
            </View>
          ),
          tabBarIcon: () => {
            return null; //to hide default icon
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
  image: {height: 28, width: 28},
  tabContainer: {
    backgroundColor: 'red',
    width: getDeviceWidth() * 0.36,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: POPPINS_REGULAR,
    textAlign: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
