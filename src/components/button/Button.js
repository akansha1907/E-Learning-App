import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styels';

const Button = props => {
  const {title, onPress, buttonStyle} = props || {};
  return (
    <Pressable style={[styles.btnContainer, buttonStyle]} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

export default Button;
