import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import BackIconHeader from '../../components/backIconHeader/BackIconHeader';
import Button from '../../components/button/Button';

const MyEnrolledCourses = () => {
  const {courses} = useSelector(state => state.MyCourses);
  const renderCourses = ({item}) => {
    return (
      <View style={styles.courseView}>
        <View style={styles.contentView}>
          <Image source={item?.image} style={styles.image} />
          <View style={styles.titleView}>
            <Text style={styles.title}>{item?.name}</Text>
            <Button
              title="Go To Course"
              buttonStyle={styles.buttonStyle}
              textStyle={styles.textStyle}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <BackIconHeader title={'My Courses'} icon={false} />
      {courses?.length < 1 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyCourse}>
            You haven't enrolled in any course yet.
          </Text>
        </View>
      ) : (
        <FlatList
          data={courses}
          showsVerticalScrollIndicator={false}
          renderItem={renderCourses}
          style={styles.flatList}
        />
      )}
    </View>
  );
};

export default MyEnrolledCourses;
