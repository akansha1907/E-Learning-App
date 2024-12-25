import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {categoryType} from '../../utils/courses';
import {BLACK, PRIMARY_APP_COLOR, SKY_BLUE} from '../../utils/colorConstants';
import Button from '../button/Button';
import {POPPINS_MEDIUM, POPPINS_REGULAR} from '../../assets/fonts';

const Categories = props => {
  const {data, onSelectCategory, selectedCategory, loading, goToDetails} =
    props || {};
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer(index)}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.desc}>{item.shortDesc}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.ratingView}>
            <View style={styles.durationView}>
              <Text style={styles.durationText}>{item.duration}</Text>
            </View>
            <Image
              source={require('../../assets/images/star.png')}
              style={styles.starImage}
            />
            <Text style={styles.ratingText}>{item?.ratings}</Text>
          </View>
          <Button
            title="View Details"
            onPress={() => goToDetails(item?.courseId, item?.name)}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.categoryContainer}>
        {categoryType.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryBtn(item.name === selectedCategory)}
            onPress={() => onSelectCategory(item)}>
            <Text style={styles.categoryText(item.name === selectedCategory)}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={PRIMARY_APP_COLOR}
          style={styles.loader}
        />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.courseId.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatList}
        />
      )}
    </View>
  );
};

export default Categories;
