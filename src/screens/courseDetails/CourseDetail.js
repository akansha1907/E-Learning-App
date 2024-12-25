import {View, Text, ActivityIndicator, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {courseDetails} from '../../utils/courses';
import {GRAY_66, PRIMARY_APP_COLOR} from '../../utils/colorConstants';
import {styles} from './styles';
import Header from '../../components/header/Header';
import BackIconHeader from '../../components/backIconHeader/BackIconHeader';
import Button from '../../components/button/Button';

const CourseDetail = navigation => {
  const route = navigation?.route;
  const {id, title} = route?.params || {};
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch the course details based on the id
    const fetchCourseDetails = () => {
      const _details = courseDetails[id];
      setDetails(_details);
    };
    setTimeout(() => {
      fetchCourseDetails();
      setLoading(false);
    }, 400);
  }, [id]);
  console.log('details?.image ', details?.image);
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
            </View>
          </ScrollView>
        </View>
      )}
      <View style={styles.bottomContainer}>
        <Button title="Enroll Now" buttonStyle={styles.buttonStyle} />
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
