import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {useIsFocused} from '@react-navigation/native';
import {getItem} from '../../utils/asyncStorage';
import {TIMERS_HISTORY} from '../../utils/constants';

const CompletedTasks = () => {
  const [history, setHistory] = useState([]);
  const focused = useIsFocused();

  useEffect(() => {
    loadHistory();
  }, [focused]);

  const loadHistory = async () => {
    try {
      const savedHistory = await getItem(TIMERS_HISTORY);
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.timerContainer}>
      <Text style={styles.name}>Name: {item.name}</Text>
      <Text style={styles.name}>Category: {item.category}</Text>
      <Text style={styles.name}>
        Completed At: {new Date(item.completedAt).toLocaleString()}
      </Text>
    </View>
  );

  const isHistoryAvl = history?.length > 0;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Completed Timers</Text>
      {isHistoryAvl ? (
        <FlatList
          data={history}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.not_task}>You have not completed any task yet</Text>
      )}
    </SafeAreaView>
  );
};

export default CompletedTasks;
