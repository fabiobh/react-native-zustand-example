import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import useTodoStore from './useTodoStore';

const TodoApp = () => {
  const [text, setText] = useState('');

  // Access state and actions from Zustand store
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const handleAddTodo = () => {
    if (text) {
      addTodo(text);
      setText('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleTodo(item.id)}>
        <Text style={item.completed ? styles.completed : styles.todoText}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => deleteTodo(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new task"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TodoApp;