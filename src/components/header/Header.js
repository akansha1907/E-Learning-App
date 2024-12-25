import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Explorer</Text>
      <Text style={styles.subTitle}>Explore skills, elevate life </Text>
    </View>
  );
};

export default Header;
