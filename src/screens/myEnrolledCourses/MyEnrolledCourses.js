// screens/HistoryScreen.js
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyEnrolledCourses = () => {
  const [history, setHistory] = useState([]);

  // Load history from AsyncStorage on initial render
  useEffect(() => {
    loadHistory();
  }, []);

  // Load history from AsyncStorage
  const loadHistory = async () => {
    const savedHistory = await AsyncStorage.getItem('history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={({item}) => (
          <View style={styles.historyItem}>
            <Text>{item.name}</Text>
            <Text>
              Completed at: {new Date(item.completionTime).toLocaleString()}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  historyItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyEnrolledCourses;
