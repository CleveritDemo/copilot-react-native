// FILE: components/UserCard.tsx
import { User } from '@/types';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import useStore from '../store';

interface UserCardProps {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  active: boolean;
}

const UserCard: React.FC<UserCardProps> = (user: User) => {
  const toggleUserActive = useStore((state) => state.toggleUserActive);

  const toggleActiveStatus = async () => {
    try {
      const response = await fetch(`http://192.168.100.24:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...user, active: !user.active }),
      });

      if (response.ok) {
        toggleUserActive(user.id);
        Alert.alert('Success', 'User status updated successfully');
      } else {
        Alert.alert('Error', 'Failed to update user status');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred');
    }
  };

  const handleLongPress = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure to delete the element?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            try {
              const response = await fetch(`http://192.168.100.24:3000/users/${user.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });

              if (response.ok) {
                Alert.alert('Success', 'User deleted successfully');
              } else {
                Alert.alert('Error', 'Failed to delete user');
              }
            } catch (error) {
              Alert.alert('Error', 'An error occurred');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <Pressable
      onPress={toggleActiveStatus}
      onLongPress={handleLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Text style={styles.id}>ID: {user.id}</Text>
      <Text style={styles.fullName}>Full Name: {user.firstName} {user.lastName}</Text>
      <Text style={styles.age}>Age: {user.age}</Text>
      <Text style={user.active ? styles.active : styles.inactive}>Active: {user.active ? 'Yes' : 'No'}</Text>
    </Pressable>
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
  pressed: {
    opacity: 0.75,
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
  inactive: {
    fontSize: 16,
    color: 'red',
  },
});

export default UserCard;