import {getItem, setItem} from '../../utils/asyncStorage';
import {TIMERS_HISTORY} from '../../utils/constants';

export const timerCategories = [
  {id: 0, title: 'Workout'},
  {id: 1, title: 'Study'},
  {id: 2, title: 'Break'},
  {id: 3, title: 'Social Media'},
  {id: 4, title: 'Yoga'},
];

export const saveTimerToHistory = async timer => {
  try {
    const savedHistory = await getItem(TIMERS_HISTORY);
    let history = savedHistory ? JSON.parse(savedHistory) : [];

    // Check if the timer already exists in history to avoid duplicate entry in history
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
    await setItem(TIMERS_HISTORY, history);
  } catch (e) {
    console.error('Error saving timer to history:', e);
  }
};
