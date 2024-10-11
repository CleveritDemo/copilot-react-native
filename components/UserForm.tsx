// FILE: app/UserForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Switch } from 'react-native';
import { User } from '../types';

export default function UserForm() {
  const [formData, setFormData] = useState<Partial<User>>({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    active: false,
  });

  const handleChange = (name: keyof User, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.100.24:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Alert.alert('Success', 'User added successfully');
      } else {
        Alert.alert('Error', 'Failed to add user');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <Text>ID:</Text>
      <TextInput
        style={styles.input}
        value={formData.id}
        onChangeText={(text) => handleChange('id', text)}
      />
      <Text>First Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />
      <Text>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <Text>Age:</Text>
      <TextInput
        style={styles.input}
        value={formData.age}
        onChangeText={(text) => handleChange('age', text)}
      />
      <Text>{formData.active ? "Active" : "No Active"}:</Text>
      <Switch value={formData.active} onValueChange={(value) => handleChange('active', value)} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: 250,
  },
});