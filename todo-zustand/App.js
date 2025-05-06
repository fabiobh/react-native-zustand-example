import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system'; // Import FileSystem
import Counter from './src/Counter';
import TodoApp from './src/TodoApp';

export default function App() {
  useEffect(() => {
    // Log the document directory path
    console.log('Document Directory:', FileSystem.documentDirectory);
  }, []);

  return (
    <View style={styles.container}>
      <Counter />
      <TodoApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



