import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import SelectionChips from '../../components/selectionChips/SelectionChips';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import {styles} from './styles';
import {COMPLETED, PAUSED, RESET, RUNNING, TIMERS} from '../../utils/constants';
import {getItem, setItem} from '../../utils/asyncStorage';
import TimerItem from '../../components/timerItem/TimerItem';
import {saveTimerToHistory, timerCategories} from './logic';

const DashboardScreens = () => {
  const [timers, setTimers] = useState([]);
  const [categories, setCategories] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);
  const intervalRef = useRef();
  const [completedTimerModalVisible, setCompletedTimerModalVisible] =
    useState(false);
  const [completedTimerName, setCompletedTimerName] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Load timers from AsyncStorage on initial render
  useEffect(() => {
    loadTimers();
  }, []);

  // Load timers from AsyncStorage
  const loadTimers = async () => {
    const savedTimers = await getItem(TIMERS);
    if (savedTimers) {
      const parsedTimers = JSON.parse(savedTimers);
      setTimers(parsedTimers);
      groupTimersByCategory(parsedTimers);
    }
  };

  // Group timers by category
  const groupTimersByCategory = _timers => {
    const grouped = {};
    _timers.forEach(timer => {
      if (!grouped[timer.category]) {
        grouped[timer.category] = [];
      }
      grouped[timer.category].push(timer);
    });
    setCategories(grouped);
  };

  // Save a new timer
  const saveTimer = async () => {
    if (category === '' || name === '' || duration === '') {
      setError(true);
      return;
    }
    const newTimer = {
      id: Date.now().toString(),
      name,
      duration: parseInt(duration, 10),
      category,
      status: PAUSED,
      remainingTime: parseInt(duration, 10),
    };

    const savedTimers = await getItem(TIMERS);
    const _timers = savedTimers ? JSON.parse(savedTimers) : [];
    _timers.push(newTimer);
    await setItem(TIMERS, timers);

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
        if (status === RUNNING && timer?.status !== COMPLETED) {
          timer.status = RUNNING;
          startCountdown(timerId);
        } else if (status === PAUSED) {
          clearInterval(intervalRef.current);
          setCompletedTimerName(timer.name);
          return {...timer, status: PAUSED}; // Stop when countdown reaches 0
        } else if (status === RESET) {
          timer.status = PAUSED;
          timer.remainingTime = timer.duration;
          clearInterval(intervalRef.current);
        }
        return {...timer};
      }
      return timer;
    });
    setTimers(updatedTimers);
    setItem(TIMERS, updatedTimers);
  };

  // Start countdown for a timer
  const startCountdown = timerId => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTimers(prevTimers => {
        return prevTimers.map(timer => {
          if (timer.id === timerId && timer.status === RUNNING) {
            if (timer.remainingTime > 0) {
              return {...timer, remainingTime: timer.remainingTime - 1};
            } else {
              clearInterval(intervalRef.current); // Stop only this timer
              setCompletedTimerName(timer.name);
              setCompletedTimerModalVisible(true);
              // Save completed timer to history
              saveTimerToHistory(timer);
              // Update timer status to "completed"
              const updatedTimer = {...timer, status: COMPLETED};

              // Save updated timers to AsyncStorage
              const newTimers = prevTimers.map(t =>
                t.id === timerId ? updatedTimer : t,
              );
              setItem(TIMERS, newTimers);

              return updatedTimer;
            }
          }
          return timer;
        });
      });
    }, 1000);
  };

  useEffect(() => {
    groupTimersByCategory(timers);
  }, [timers]);

  // Toggle expanded/collapsed state for a category
  const toggleCategory = _category => {
    setExpandedCategories(prev => ({
      ...prev,
      [_category]: !prev[_category],
    }));
  };

  // Render each timer item
  const renderTimerItem = ({item}) => (
    <TimerItem
      item={item}
      updateTimerStatus={(id, status) => updateTimerStatus(id, status)}
    />
  );

  // Render each category section
  const renderCategory = ({item}) => {
    const isExpand = expandedCategories[item.category];
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => toggleCategory(item.category)}
          style={styles.categoryView}>
          <Text style={styles.categoryTitle}>{item.category}</Text>
          <View style={styles.expandView}>
            <Image
              source={require('../../assets/images/expand.png')}
              style={styles.expand_img(isExpand)}
            />
          </View>
        </TouchableOpacity>
        {isExpand && (
          <FlatList
            data={item.timers}
            renderItem={renderTimerItem}
            keyExtractor={timer => timer.id}
          />
        )}
      </View>
    );
  };

  //if any task is added only then show tasks otherwise show other text
  const isTimerAvl = Object.keys(categories).length > 0;
  return (
    <View style={styles.container}>
      <Header />
      {isTimerAvl ? (
        <FlatList
          data={Object.keys(categories).map(key => ({
            category: key,
            timers: categories[key],
          }))}
          renderItem={renderCategory}
          keyExtractor={item => item.category}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.not_task}>You have not added any task yet</Text>
      )}
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
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Duration (seconds)"
              value={duration}
              onChangeText={text => setDuration(text)}
              keyboardType="numeric"
            />
            <SelectionChips
              data={timerCategories}
              onSelectCategory={item => setCategory(item.title)}
              selectedCategory={category}
            />
            {error && <Text style={styles.error}>All fields are required</Text>}
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                onPress={() => setModalVisible(false)}
                buttonStyle={styles.cancelBtn}
                textStyle={styles.cancelTxt}
              />
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
            <Text style={styles.modalTitle}>
              Congratulations! {'\n'}Timer Completed
            </Text>
            <Text style={styles.food_finished}>
              {completedTimerName} has finished.
            </Text>
            <Button
              title="Close"
              onPress={() => setCompletedTimerModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DashboardScreens;
