import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserCardProps {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  active: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ id, firstName, lastName, age, active }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>ID: {id}</Text>
      <Text style={styles.fullName}>Full Name: {firstName} {lastName}</Text>
      <Text style={styles.age}>Age: {age}</Text>
      <Text style={active ? styles.active : styles.red}>Active: {active ? 'Yes' : 'No'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullName: {
    fontSize: 18,
    marginVertical: 5,
  },
  age: {
    fontSize: 16,
  },
  active: {
    fontSize: 16,
    color: 'green',
  },
  red: {
    fontSize: 16,
    color: 'red',
  }
});

export default UserCard;