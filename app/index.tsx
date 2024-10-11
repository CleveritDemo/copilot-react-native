// FILE: index.tsx
import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet } from "react-native";
import UserCard from "../components/UserCard"; // Ensure the path is correct
import useStore from "../store";
import { User } from "../types";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.100.24:3000/users");
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: User }) => (
    <UserCard
      id={item.id}
      firstName={item.firstName}
      lastName={item.lastName}
      age={item.age}
      active={item.active}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshing={loading}
          onRefresh={fetchData}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});