import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet } from "react-native";
import UserCard from "../components/UserCard"; // Ensure the path is correct
import { User } from "../types";


export default function Index() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.100.24:3000/users");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
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
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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