import {AsyncStorage} from 'react-native';

class AsyncStorageUtil {
  static async getItemFromStorage(key) {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  }
  static async getMultipleItemsFromStorage(keys, defaultValue) {
    const value = await AsyncStorage.multiGet(keys);
    if (value !== null) {
      value.forEach((item, index) => {
        value[index][1] = JSON.parse(value[index][1]);
      });
      return value;
    }
    return defaultValue || null;
  }
  static async setItemInStorage(key, value) {
    AsyncStorage.setItem(key, JSON.stringify(value));
  }
  static async clear() {
    AsyncStorage.clear();
  }
  static async removeItemFromStorage(key) {
    AsyncStorage.removeItem(key);
  }
}
export default AsyncStorageUtil;
