// // screens/HomeScreen.js
// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   TextInput,
//   Alert,
//   SafeAreaView,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SelectionChips from '../../components/selectionChips/SelectionChips';
// import {timerCategories} from './helper';
// import {
//   GRAY_66,
//   GRAY_B5,
//   GRAY_LIGHT,
//   RED_COLOR,
//   SKY_BLUE,
//   SKY_BLUE_LIGHT,
// } from '../../utils/colorConstants';
// import Button from '../../components/button/Button';

// const DashboardScreens = () => {
//   const [timers, setTimers] = useState([]);
//   const [categories, setCategories] = useState({});
//   const [modalVisible, setModalVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [duration, setDuration] = useState('');
//   const [category, setCategory] = useState('');
//   const [error, setError] = useState(false);
//   const intervalRef = useRef();
//   const [completedTimerModalVisible, setCompletedTimerModalVisible] =
//     useState(false);
//   const [completedTimerName, setCompletedTimerName] = useState('');

//   // Load timers from AsyncStorage on initial render
//   useEffect(() => {
//     loadTimers();
//   }, []);

//   // Load timers from AsyncStorage
//   const loadTimers = async () => {
//     const savedTimers = await AsyncStorage.getItem('timers');
//     console.log(savedTimers);
//     if (savedTimers) {
//       const parsedTimers = JSON.parse(savedTimers);
//       setTimers(parsedTimers);
//       groupTimersByCategory(parsedTimers);
//     }
//   };

//   // Group timers by category
//   const groupTimersByCategory = timers => {
//     const grouped = {};
//     timers.forEach(timer => {
//       if (!grouped[timer.category]) {
//         grouped[timer.category] = [];
//       }
//       grouped[timer.category].push(timer);
//     });
//     setCategories(grouped);
//   };

//   // Save a new timer
//   const saveTimer = async () => {
//     if (category === '' || name === '' || duration === '') {
//       setError(true);
//       return;
//     }
//     const newTimer = {
//       id: Date.now().toString(),
//       name,
//       duration: parseInt(duration, 10),
//       category: category,
//       status: 'paused',
//       remainingTime: parseInt(duration, 10),
//     };

//     const savedTimers = await AsyncStorage.getItem('timers');
//     const timers = savedTimers ? JSON.parse(savedTimers) : [];
//     timers.push(newTimer);
//     await AsyncStorage.setItem('timers', JSON.stringify(timers));

//     setModalVisible(false);
//     setName('');
//     setDuration('');
//     setCategory('');
//     loadTimers(); // Refresh the timer list
//   };

//   // Update timer status (Start, Pause, Reset)
//   const updateTimerStatus = (timerId, status) => {
//     const updatedTimers = timers.map(timer => {
//       if (timer.id === timerId) {
//         if (status === 'running') {
//           if (timer.status !== 'running') {
//             timer.status = 'running';
//             startCountdown(timerId);
//           }
//         } else if (status === 'paused') {
//           timer.status = 'paused';
//           clearInterval(intervalRef.current);
//         } else if (status === 'reset') {
//           timer.status = 'paused';
//           timer.remainingTime = timer.duration;
//           clearInterval(intervalRef.current);
//         }
//         return {...timer};
//       }
//       return timer;
//     });

//     setTimers(updatedTimers);
//     AsyncStorage.setItem('timers', JSON.stringify(updatedTimers));
//   };
// const startCountdown = timerId => {
//   clearInterval(intervalRef.current); // Clear previous interval if any

//   intervalRef.current = setInterval(() => {
//     setTimers(prevTimers => {
//       return prevTimers.map(timer => {
//         if (timer.id === timerId && timer.status === 'running') {
//           if (timer.remainingTime > 0) {
//             return {...timer, remainingTime: timer.remainingTime - 1};
//           } else {
//             clearInterval(intervalRef.current);
//             setCompletedTimerName(timer.name);
//             setCompletedTimerModalVisible(true);
//             return {...timer, status: 'paused'}; // Stop when countdown reaches 0
//           }
//         }
//         return timer;
//       });
//     });
//   }, 1000);
// };
//   // const updateTimerStatus = (timerId, status) => {
//   //   const updatedTimers = timers.map(timer => {
//   //     if (timer.id === timerId) {
//   //       timer.status = status;
//   //       return {...timer};
//   //     }
//   //     return timer;
//   //   });
//   //   setTimers(updatedTimers);
//   //   AsyncStorage.setItem('timers', JSON.stringify(updatedTimers));
//   // };

//   // Bulk actions for a category (Start All, Pause All, Reset All)
//   const handleBulkAction = (action, category) => {
//     const updatedTimers = timers.map(timer => {
//       if (timer.category === category) {
//         return {...timer, status: action};
//       }
//       return timer;
//     });
//     setTimers(updatedTimers);
//     AsyncStorage.setItem('timers', JSON.stringify(updatedTimers));
//   };

//   // Render each timer item
//   const renderTimerItem = ({item}) => (
//     <View style={styles.timerContainer}>
//       <Text>{item.name}</Text>
//       <Text>Remaining Time: {item.remainingTime} seconds</Text>
//       <View style={styles.progressBar}>
//         <View
//           style={{
//             width: `${(item.remainingTime / item.duration) * 100}%`,
//             height: '100%',
//             backgroundColor: 'green',
//           }}
//         />
//       </View>
//       <Text>Status: {item.status}</Text>
//       <View style={styles.timerControls}>
//         <Button
//           title="Start"
//           onPress={() => updateTimerStatus(item.id, 'running')}
//         />
//         <Button
//           title="Pause"
//           onPress={() => updateTimerStatus(item.id, 'paused')}
//         />
//         <Button
//           title="Reset"
//           onPress={() => updateTimerStatus(item.id, 'reset')}
//         />
//       </View>
//     </View>
//   );

//   // Render each category section
//   const renderCategory = ({item}) => (
//     <View style={styles.categoryContainer}>
//       <Text style={styles.categoryTitle}>{item.category}</Text>
//       <View style={styles.timerContainer}>
//         <Text>{item.name}</Text>
//         <Text>Remaining Time: {item.remainingTime} seconds</Text>
//         <View style={styles.progressBar}>
//           <View
//             style={{
//               width: `${(item.remainingTime / item.duration) * 100}%`,
//               height: '100%',
//               backgroundColor: 'green',
//             }}
//           />
//         </View>
//         <Text>Status: {item.status}</Text>
//         <View style={styles.timerControls}>
//           <Button
//             title="Start"
//             onPress={() => updateTimerStatus(item.id, 'running')}
//           />
//           <Button
//             title="Pause"
//             onPress={() => updateTimerStatus(item.id, 'paused')}
//           />
//           <Button
//             title="Reset"
//             onPress={() => updateTimerStatus(item.id, 'reset')}
//           />
//         </View>
//       </View>
//     </View>
//   );
//   const handleCategorySelection = item => {
//     console.log('item.tilte ', item.title);
//     setError(false);
//     setCategory(item?.title);
//   };
//   const onChangeName = text => {
//     setError(false);
//     setName(text);
//   };

//   const onChangeDuration = text => {
//     setError(false);
//     setDuration(text);
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={timers}
//         renderItem={renderCategory}
//         keyExtractor={item => item.category}
//       />
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.addButtonText}>Add Timer</Text>
//       </TouchableOpacity>

//       {/* Add Timer Modal */}
//       <Modal visible={modalVisible} animationType="slide" transparent={true}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Add New Timer</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Timer Name"
//               value={name}
//               onChangeText={onChangeName}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Duration (seconds)"
//               value={duration}
//               onChangeText={onChangeDuration}
//               keyboardType="numeric"
//             />
//             <SelectionChips
//               data={timerCategories}
//               onSelectCategory={handleCategorySelection}
//               selectedCategory={category}
//             />
//             {error && <Text style={styles.error}>All fields are required</Text>}
//             <View style={styles.modalButtons}>
//               <Button
//                 title="Cancel"
//                 onPress={() => setModalVisible(false)}
//                 buttonStyle={styles.cancelBtn}
//                 textStyle={styles.cancelTxt}
//               />
//               <Button title="Save Timer" onPress={saveTimer} />
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Completed Timer Modal */}
//       <Modal
//         visible={completedTimerModalVisible}
//         animationType="slide"
//         transparent={true}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Timer Completed!</Text>
//             <Text style={styles.food_finished}>
//               {completedTimerName} has finished.
//             </Text>
//             <Button
//               title="Close"
//               onPress={() => setCompletedTimerModalVisible(false)}
//             />
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   categoryContainer: {
//     marginBottom: 16,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   timerContainer: {
//     padding: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   progressBar: {
//     height: 10,
//     width: '100%',
//     backgroundColor: '#ccc',
//     marginVertical: 8,
//   },
//   timerControls: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   addButton: {
//     position: 'absolute',
//     right: 16,
//     bottom: 16,
//     backgroundColor: SKY_BLUE,
//     padding: 13,
//     elevation: 4,
//     shadowColor: GRAY_LIGHT,
//     borderRadius: 50,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     borderColor: GRAY_B5,
//     borderWidth: 0.8,
//     borderRadius: 10,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'space-between',
//   },
//   cancelBtn: {backgroundColor: SKY_BLUE},
//   cancelTxt: {},
//   error: {color: RED_COLOR, fontSize: 12, marginBottom: 5},
//   food_finished: {marginVertical: 20},
// });

// export default DashboardScreens;
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectionChips from '../../components/selectionChips/SelectionChips';
import {timerCategories} from './helper';
import {
  GRAY_66,
  GRAY_B5,
  GRAY_LIGHT,
  RED_COLOR,
  SKY_BLUE,
  SKY_BLUE_LIGHT,
} from '../../utils/colorConstants';
import Button from '../../components/button/Button';

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
    if (category === '' || name === '' || duration === '') {
      setError(true);
      return;
    }
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
    console.log('timerId, status ', timerId, status);
    const updatedTimers = timers.map(timer => {
      if (timer.id === timerId) {
        if (status === 'running') {
          console.log('timerId, status2 ', timerId, status);
          timer.status = 'running';
          startCountdown(timerId);
        } else if (status === 'paused') {
          clearInterval(intervalRef.current);
          setCompletedTimerName(timer.name);
          setCompletedTimerModalVisible(true);
          return {...timer, status: 'paused'}; // Stop when countdown reaches 0
        } else if (status === 'reset') {
          timer.status = 'paused';
          timer.remainingTime = timer.duration;
          clearInterval(intervalRef.current);
        }
        return {...timer};
      }
      return timer;
    });

    console.log('updated timerbs ', updatedTimers);
    setTimers(updatedTimers);
    AsyncStorage.setItem('timers', JSON.stringify(updatedTimers));
  };

  // Start countdown for a timer
  const startCountdown = timerId => {
    clearInterval(intervalRef.current); // Ensure no duplicate intervals

    intervalRef.current = setInterval(() => {
      setTimers(prevTimers => {
        return prevTimers.map(timer => {
          if (timer.id === timerId && timer.status === 'running') {
            if (timer.remainingTime > 0) {
              return {...timer, remainingTime: timer.remainingTime - 1};
            } else {
              clearInterval(intervalRef.current); // Stop only this timer
              setCompletedTimerName(timer.name);
              setCompletedTimerModalVisible(true);
              // Save completed timer to history
              saveTimerToHistory(timer);
              return {...timer, status: 'completed', remainingTime: 0};
            }
          }
          return timer;
        });
      });
    }, 1000);
    console.log('timers 535', timers);
  };

  const saveTimerToHistory = async timer => {
    try {
      const savedHistory = await AsyncStorage.getItem('history');
      let history = savedHistory ? JSON.parse(savedHistory) : [];

      // Check if the timer already exists in history
      const existingIndex = history.findIndex(item => item.id === timer.id);

      if (existingIndex !== -1) {
        // If it exists, update the timestamp only
        history[existingIndex].completedAt = new Date().toISOString();
      } else {
        // If not, add the completed timer with timestamp
        const completedTimer = {
          ...timer,
          completedAt: new Date().toISOString(),
        };
        history.push(completedTimer);
      }

      // Save updated history
      await AsyncStorage.setItem('history', JSON.stringify(history));
    } catch (error) {
      console.error('Error saving timer to history:', error);
    }
  };

  useEffect(() => {
    groupTimersByCategory(timers);
  }, [timers]);
  // Toggle expanded/collapsed state for a category
  const toggleCategory = category => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
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
      <TouchableOpacity onPress={() => toggleCategory(item.category)}>
        <Text style={styles.categoryTitle}>{item.category}</Text>
      </TouchableOpacity>
      {expandedCategories[item.category] && (
        <FlatList
          data={item.timers}
          renderItem={renderTimerItem}
          keyExtractor={timer => timer.id}
        />
      )}
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
    backgroundColor: SKY_BLUE,
    padding: 13,
    elevation: 4,
    shadowColor: GRAY_LIGHT,
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
  },
  input: {
    height: 40,
    borderColor: GRAY_B5,
    borderWidth: 0.8,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  cancelBtn: {backgroundColor: SKY_BLUE},
  cancelTxt: {},
  error: {color: RED_COLOR, fontSize: 12, marginBottom: 5},
  food_finished: {marginVertical: 20},
});

export default DashboardScreens;
