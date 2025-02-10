import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  PRIMARY_APP_COLOR,
  SKY_BLUE,
  SKY_BLUE_LIGHT,
  WHITE,
} from '../../utils/colorConstants';
import {POPPINS_MEDIUM} from '../../assets/fonts';

const SelectionChips = props => {
  const {data, onSelectCategory, selectedCategory} = props || {};
  return (
    <View style={styles.container}>
      {data.map(item => (
        <Pressable
          key={item.id}
          style={styles.itemContainer(selectedCategory === item.title)}
          onPress={() => onSelectCategory(item)}>
          <Text style={styles.title(selectedCategory === item.title)}>
            {item.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SelectionChips;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginVertical: 14,
  },
  itemContainer: selectedCategory => ({
    backgroundColor: selectedCategory ? PRIMARY_APP_COLOR : SKY_BLUE_LIGHT,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: SKY_BLUE,
    paddingVertical: 4,
    borderRadius: 14,
  }),
  title: selectedCategory => ({
    color: selectedCategory ? WHITE : PRIMARY_APP_COLOR,
    fontFamily: POPPINS_MEDIUM,
    fontSize: 13,
  }),
});
