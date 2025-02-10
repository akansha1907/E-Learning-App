import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyEnrolledCourses = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const savedHistory = await AsyncStorage.getItem('history');
      console.log('history ', savedHistory);
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Completed Timers</Text>
      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.timerContainer}>
            <Text>Name: {item.name}</Text>
            <Text>Category: {item.category}</Text>
            <Text>
              Completed At: {new Date(item.completedAt).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  timerContainer: {padding: 10, borderBottomWidth: 1, borderColor: '#ccc'},
});

export default MyEnrolledCourses;
