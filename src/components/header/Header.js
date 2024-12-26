import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Up↑ Skills</Text>
        <Text style={styles.subTitle}>Skill up with UpSkill </Text>
      </View>
      <Image
        source={require('../../assets/images/bell.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Header;
