import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

const BackIconHeader = props => {
  const {title, navigation, icon = true} = props || {};
  return (
    <View style={styles.container}>
      {icon && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <Image
            source={require('../../assets/images/back_icon.png')}
            style={styles.image}
          />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BackIconHeader;
