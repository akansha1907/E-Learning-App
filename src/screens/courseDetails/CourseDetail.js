import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {courseDetails} from '../../utils/courses';
import {GRAY_66, PRIMARY_APP_COLOR} from '../../utils/colorConstants';
import {styles} from './styles';
import BackIconHeader from '../../components/backIconHeader/BackIconHeader';
import Button from '../../components/button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setCourses} from '../../redux/slices/MyCourses';

const CourseDetail = navigation => {
  const route = navigation?.route;
  const {id, title} = route?.params || {};
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const {courses} = useSelector(state => state.MyCourses);
  const isEnrolled = courses?.some(course => course?.courseId === id); //if course already reducer no need to add it again

  const dispatch = useDispatch();
  useEffect(() => {
    // fetch the course details based on the id
    const fetchCourseDetails = () => {
      const _details = courseDetails[id];
      setDetails(_details);
    };
    setTimeout(() => {
      //slight time delay to show loader screen
      fetchCourseDetails();
      setLoading(false);
    }, 400);
  }, [id]);

  const enrollInCourse = () => {
    if (!isEnrolled) {
      //allow enroll if user not already enrolled
      dispatch(setCourses(details));
    } else {
      ToastAndroid.show(
        'You are already enrolled in this course',
        ToastAndroid.SHORT,
      );
    }
  };
  return (
    <View style={styles.container}>
      <BackIconHeader title={title} navigation={navigation?.navigation} />
      {!loading && (
        <View>
          <ScrollView>
            <Image source={details?.image} style={styles.image} />
            <View style={styles.contentView}>
              <View style={styles.titleView}>
                <Text style={styles.title}>{details?.name}</Text>
                <View style={styles.ratingView}>
                  <Image
                    source={require('../../assets/images/star.png')}
                    style={styles.starImage}
                  />
                  <Text style={styles.ratingText}>{details?.ratings}</Text>
                </View>
              </View>
              <Text style={styles.desc}>By {details?.instructor}</Text>
              <View style={styles.durationView}>
                <Text style={styles.durationText}>{details?.duration}</Text>
              </View>
              <Text style={styles.about}>About Course</Text>
              <Text style={[styles.desc, {color: GRAY_66}]}>
                {details?.description}
              </Text>
              <Text style={styles.about}>Skills you will gain</Text>
              <View style={styles.skillsView}>
                {details?.skills?.map(skill => (
                  <View key={skill} style={styles.skill}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
      <View style={styles.bottomContainer}>
        <Button
          title={isEnrolled ? 'Go To Course' : 'Enroll Now'}
          buttonStyle={styles.buttonStyle}
          onPress={enrollInCourse}
        />
      </View>
      <ActivityIndicator
        size="large"
        color={PRIMARY_APP_COLOR}
        animating={loading}
        style={styles.loaderView}
      />
    </View>
  );
};

export default CourseDetail;
