import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Task Track</Text>
        <Text style={styles.subTitle}>
          Track your all tasks and complete on time{' '}
        </Text>
      </View>
      <Image
        source={require('../../assets/images/bell.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Header;
