// FILE: app/enroll.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserForm from '../components/UserForm';

export default function Enroll() {
  return (
    <View style={styles.container}>
      <UserForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});