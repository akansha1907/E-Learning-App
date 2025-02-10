import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Button from '../button/Button';
import {PAUSED, RESET, RUNNING} from '../../utils/constants';

const TimerItem = props => {
  const {item, updateTimerStatus} = props || {};
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.remaining}>
        Remaining Time: {item.remainingTime} seconds
      </Text>
      <View style={styles.progressBar}>
        <View style={styles.status_bar(item?.remainingTime, item?.duration)} />
      </View>
      <Text style={styles.remaining}>Status: {item.status}</Text>
      <View style={styles.timerControls}>
        <Button
          title="Start"
          onPress={() => updateTimerStatus(item.id, RUNNING)}
        />
        <Button
          title="Pause"
          onPress={() => updateTimerStatus(item.id, PAUSED)}
        />
        <Button
          title="Reset"
          onPress={() => updateTimerStatus(item.id, RESET)}
        />
      </View>
    </View>
  );
};

export default TimerItem;
