import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import {styles} from './styles';
import Categories from '../../components/categories/Categories';
import {courses} from '../../utils/courses';
import {ALL, BUSINESS, COURSE_DETAILS, TECH} from '../../utils/constants';

const DashboardScreens = navigation => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState(courses);
  const [loading, setLoading] = useState(false);
  const handleCategorySelection = item => {
    setSelectedCategory(item?.name);
    setLoading(true); // Show loading state immediately for good user interaction

    let coursesToShow = [];
    if (item.name === TECH) {
      coursesToShow = courses.filter(_item => _item.courseType === TECH);
    } else if (item.name === BUSINESS) {
      coursesToShow = courses.filter(_item => _item.courseType === BUSINESS);
    } else {
      coursesToShow = courses; // Show all courses
    }

    setTimeout(() => {
      setData(coursesToShow);
      setLoading(false); // Stop loading after setting data
    }, 200);
  };
  console.log('selectedCategory ', selectedCategory);
  const goToDetails = (courseId, title) => {
    navigation?.navigation?.navigate(COURSE_DETAILS, {
      id: courseId,
      title: title,
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.category}>Categories</Text>
      <Categories
        data={data}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelection}
        loading={loading}
        goToDetails={goToDetails}
      />
    </View>
  );
};

export default DashboardScreens;
