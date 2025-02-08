// screens/HomeScreen.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreens = () => {
  const [timers, setTimers] = useState([]);
  const [categories, setCategories] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [completedTimerModalVisible, setCompletedTimerModalVisible] =
    useState(false);
  const [completedTimerName, setCompletedTimerName] = useState('');

  // Load timers from AsyncStorage on initial render
  useEffect(() => {
    loadTimers();
  }, []);

  // Load timers from AsyncStorage
  const loadTimers = async () => {
    const savedTimers = await AsyncStorage.getItem('timers');
    if (savedTimers) {
      const parsedTimers = JSON.parse(savedTimers);
      setTimers(parsedTimers);
      groupTimersByCategory(parsedTimers);
    }
  };

  // Group timers by category
  const groupTimersByCategory = timers => {
    const grouped = {};
    timers.forEach(timer => {
      if (!grouped[timer.category]) {
        grouped[timer.category] = [];
      }
      grouped[timer.category].push(timer);
    });
    setCategories(grouped);
  };

  // Save a new timer
  const saveTimer = async () => {
    const newTimer = {
      id: Date.now().toString(),
      name,
      duration: parseInt(duration, 10),
      category,
      status: 'paused',
      remainingTime: parseInt(duration, 10),
    };

    const savedTimers = await AsyncStorage.getItem('timers');
    const timers = savedTimers ? JSON.parse(savedTimers) : [];
    timers.push(newTimer);
    await AsyncStorage.setItem('timers', JSON.stringify(timers));

    setModalVisible(false);
    setName('');
    setDuration('');
    setCategory('');
    loadTimers(); // Refresh the timer list
  };

  // Update timer status (Start, Pause, Reset)
  const updateTimerStatus = (timerId, status) => {
    const updatedTimers = timers.map(timer => {
      if (timer.id === timerId) {
        return {...timer, status};
      }
      return timer;
    });
    setTimers(updatedTimers);
    AsyncStorage.setItem('timers', JSON.stringify(updatedTimers));
  };

  // Bulk actions for a category (Start All, Pause All, Reset All)
  const handleBulkAction = (action, category) => {
    const updatedTimers = timers.map(timer => {
      if (timer.category === category) {
        return {...timer, status: action};
      }
      return timer;
    });
    setTimers(updatedTimers);
    AsyncStorage.setItem('timers', JSON.stringify(updatedTimers));
  };

  // Render each timer item
  const renderTimerItem = ({item}) => (
    <View style={styles.timerContainer}>
      <Text>{item.name}</Text>
      <Text>Remaining Time: {item.remainingTime} seconds</Text>
      <View style={styles.progressBar}>
        <View
          style={{
            width: `${(item.remainingTime / item.duration) * 100}%`,
            height: '100%',
            backgroundColor: 'green',
          }}
        />
      </View>
      <Text>Status: {item.status}</Text>
      <View style={styles.timerControls}>
        <Button
          title="Start"
          onPress={() => updateTimerStatus(item.id, 'running')}
        />
        <Button
          title="Pause"
          onPress={() => updateTimerStatus(item.id, 'paused')}
        />
        <Button
          title="Reset"
          onPress={() => updateTimerStatus(item.id, 'reset')}
        />
      </View>
    </View>
  );

  // Render each category section
  const renderCategory = ({item}) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{item.category}</Text>
      <View style={styles.bulkActions}>
        <Button
          title="Start All"
          onPress={() => handleBulkAction('running', item.category)}
        />
        <Button
          title="Pause All"
          onPress={() => handleBulkAction('paused', item.category)}
        />
        <Button
          title="Reset All"
          onPress={() => handleBulkAction('reset', item.category)}
        />
      </View>
      <FlatList
        data={item.timers}
        renderItem={renderTimerItem}
        keyExtractor={timer => timer.id}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.keys(categories).map(key => ({
          category: key,
          timers: categories[key],
        }))}
        renderItem={renderCategory}
        keyExtractor={item => item.category}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add Timer</Text>
      </TouchableOpacity>

      {/* Add Timer Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Timer</Text>
            <TextInput
              style={styles.input}
              placeholder="Timer Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Duration (seconds)"
              value={duration}
              onChangeText={setDuration}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Category"
              value={category}
              onChangeText={setCategory}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Save Timer" onPress={saveTimer} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Completed Timer Modal */}
      <Modal
        visible={completedTimerModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Timer Completed!</Text>
            <Text>{completedTimerName} has finished.</Text>
            <Button
              title="Close"
              onPress={() => setCompletedTimerModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timerContainer: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  timerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 50,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DashboardScreens;
