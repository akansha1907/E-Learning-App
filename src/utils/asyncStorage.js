import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    //Async storage only stores data in string form
    const stringData = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringData);
    return true;
  } catch (e) {
    console.log('something went wrong ', e);
    return false;
  }
};

export const getItem = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (e) {
    console.log('Something went wrong ', e);
    return null;
  }
};
