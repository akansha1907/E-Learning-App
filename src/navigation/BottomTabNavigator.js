import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {COURSE_DETAILS, DASHBOARD_SCREEN, MY_COURSES} from '../utils/constants';
import DashboardScreens from '../screens/dashboardScreen/DashboardScreens';
import CourseDetail from '../screens/courseDetails/CourseDetail';
import {GRAY_66, PRIMARY_APP_COLOR, WHITE} from '../utils/colorConstants';
import {POPPINS_MEDIUM, POPPINS_REGULAR} from '../assets/fonts';
import MyCourses from '../screens/myCourses/MyCourses';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: WHITE,
          height: 84,
          // paddingTop: 10,
          // paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: POPPINS_REGULAR,
          marginTop: 5,
        },
        tabBarItemStyle: {
          borderRadius: 20,
          marginVertical: 10,
          marginHorizontal: 14,
        },
        tabBarActiveBackgroundColor: PRIMARY_APP_COLOR,
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              color: focused ? WHITE : GRAY_66,
              fontSize: 12,
              fontFamily: POPPINS_MEDIUM,
              marginVertical: 5,
              width: '100%',
              textAlign: 'center',
            }}>
            {route.name}
          </Text>
        ),
      })}>
      <Tab.Screen
        name={DASHBOARD_SCREEN}
        component={DashboardScreens}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/home.png')}
              style={[styles.image, {tintColor: focused ? WHITE : GRAY_66}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={MY_COURSES}
        component={MyCourses}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/open-book.png')}
              style={[styles.image, {tintColor: focused ? WHITE : GRAY_66}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
  image: {height: 32, width: 32},
});
