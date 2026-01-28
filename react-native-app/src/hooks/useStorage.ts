import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(key).then(stored => {
      if (stored) {
        setValue(JSON.parse(stored));
      }
      setLoading(false);
    });
  }, [key]);

  const setStoredValue = async (newValue: T) => {
    setValue(newValue);
    await AsyncStorage.setItem(key, JSON.stringify(newValue));
  };

  return {value, setValue: setStoredValue, loading};
}
