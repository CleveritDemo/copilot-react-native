# 💻 Activity

Development of an app in React Native using GitHub Copilot

# 🎯 General Objective:

Demonstrate the impact of GitHub Copilot in enhancing agility and accelerating the development process within a React Native project. Highlight how Copilot can efficiently generate key components and provide intelligent suggestions for libraries that can help address specific challenges.

# ✅ Specific Objectives:

&check; Build a functional CRUD application to create, read, update, and delete data from an API with the assistance of GitHub Copilot. Show how Copilot enhances the development process by generating files that simulate a database or by offering intelligent recommendations on the best libraries to use for specific tasks.

&check; Write and execute tests with the help of GitHub Copilot. Highlight how Copilot facilitates the creation of unit tests, ensuring code reliability and correctness, while streamlining the overall testing process.

# 📦 Expected Outcomes

&check; Boosted productivity: By the end, you will have mastered how to leverage GitHub Copilot to greatly enhance your productivity in React Native (Expo) development. From project setup and code generation to file management and testing, Copilot streamlines each step of the development workflow.

&check; Function implementation: You will gain insights into how Copilot assists in creating and refining functions for data processing and addition, enhancing both the efficiency and effectiveness of your coding process.

&check; Optimized testing: You will be equipped to utilize Copilot for writing and executing unit tests, ensuring robust code quality and performance.

# 🛠 Requirements

- VS Code
- Node +18 Installed (nvm recommended)
- GitHub Copilot Extension Enabled
- Device: (recommended)
  - iOS: iPhone or iPad +11
  - Android: Android device +5.0
    - Android SDK or Android Studio
- Software:
  - Node.js LTS version recommended
  - **Expo CLI:** `npm install -g expo-cli`
  - Android Studio to run the Android emulator or Phone Link installed on PC (Windows), to share the mobile screen on PC - Required for presentation purposes and optional for attendees.

> [!WARNING]  
> If you are using Windows Subsystem for Linux (WSL2), use Windows PowerShell directly.

> [!IMPORTANT]  
> Throughout the tutorial, we will use an Android device with Windows 10.

[!IMPORTANT] Note for the presenter: Make sure to have Android Studio and the Android emulator set up before starting the activity. This is to display the application on an Android emulator during the presentation. https://docs.expo.dev/workflow/android-studio-emulator/

# 🚀 Before Starting

## Step 1. Clone the repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/CleveritDemo/copilot-react-native.git
```

## Step 2. Install dependencies

Navigate to the project directory and install the required dependencies using the following command:

```bash
cd copilot-react-native
npm install
npx expo start
```

# 🦾 Let's code

### Step 1. Connect your device with the dev environment (Optional)

- Device:
  - Open Expo Go
- PC:
  - In the console where Expo is running, scan the QR code with your device.

You should see Expo building the app in the console on your PC, and then the Expo app will appear on your device.

### Step 2. Delete unnecessary code.

👤 Prompt:
`@workspace read the #file:package.json and tell me if there some command to reset-project and how run the command`

🤖 Copilot Answer:
Yes, there is a command to reset the project in the package.json file. The reset-project script is defined as follows:

```json
"scripts": {
  "reset-project": "node ./scripts/reset-project.js"
}
```

To run the command, use the following in your terminal:
`npm run reset-project`

## Setup REST API

### Step 3. Create a mock data

👤 Prompt:
`@workspace /new Create a file named db.json at the root of the project. This file should contain a key called users, and users should be an array of elements with the following fields: id, firstName, lastName, age, and a boolean field to indicate whether they are active. Use data from Real Madrid football players for the information, all fields must be of type string exept active, active must be boolean`

🤖 Copilot Answer:
Here is the content for the db.json file with data from Real Madrid football players:

```json
{
  "users": [
    {
      "id": "1",
      "firstName": "Karim",
      "lastName": "Benzema",
      "age": "33",
      "active": true
    },
    {
      "id": "2",
      "firstName": "Luka",
      "lastName": "Modric",
      "age": "35",
      "active": true
    },
    {
      "id": "3",
      "firstName": "Sergio",
      "lastName": "Ramos",
      "age": "34",
      "active": false
    },
    {
      "id": "4",
      "firstName": "Toni",
      "lastName": "Kroos",
      "age": "31",
      "active": true
    },
    {
      "id": "5",
      "firstName": "Eden",
      "lastName": "Hazard",
      "age": "30",
      "active": true
    }
  ]
}
```

### Step 4. Create a mock Server

👤 Prompt:
`@workspace Read #file:db.json and recommend me a JS library that allows me to create a REST API from the db.json. add the script to run the server in #file:package.json`

🤖 Copilot Answer:
To create a REST API from the db.json file, you can use the json-server library. Here is how you can add it to your project and update the package.json file to include a script to run the server.

First, install json-server:
`npm install json-server --save-dev`

Next, update the package.json file to include a script to run the server:
`"serve-api": "json-server --watch db.json --port 3000"`

Now, you can run the server with the following command:
`npm run serve-api`

This will start a REST API server at http://localhost:3000 based on the structure of your db.json file.

Example Usage:

- Get all users: GET http://localhost:3000/users
- Get a user by ID: GET http://localhost:3000/users/1
- Add a new user: POST http://localhost:3000/users
- Update a user: PUT http://localhost:3000/users/1
- Delete a user: DELETE http://localhost:3000/users/1

## Read data (R)

### Step 5. Create a bottom tab menu called HOME

👤 Prompt:
`@workspace How can I create a new tab called Home in the file #file:_layout.tsx that displays the content of the file #file:index.tsx and uses #file:TabBarIcon.tsx for the icon of the new tab?`

🤖 Copilot Answer:
To create a new tab called "Home" in the /app folder and use the index.tsx file as the page of the tab, follow these steps:

1.Ensure the index.tsx file is correctly set up: The index.tsx file is already set up as shown in the provided context.

2.Update the \_layout.tsx file to include the new Home tab: Modify the \_layout.tsx file to include the index.tsx component as a tab.

```tsx
// app/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```

With these steps, you will have a new tab called "Home" in the /app folder, and the index.tsx file will be used as the page for this tab. The Home tab will display the content defined in index.tsx.

### Step 6. Create data interface

👤 Prompt:
`@workspace Read the file #file:db.json and create an interface for the data in that file. The file should be named types.ts`

🤖 Copilot Answer:
Sure, here is the file you requested:
`types.ts`

```ts
// types.ts
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  active: boolean;
}
```

### Step 7. Display data from REST API

👤 Prompt:
`@workspace Create a function in the file #file:index.tsx that makes a GET request to the URL localhost:3000/user to store the data in a variable and then display the data on the screen. Use fetch for the request.`

🤖 Copilot Answer:
To perform a GET request to the URL http://localhost:3000/users and display the data on the screen, you can use the fetch API in combination with React's useEffect and useState hooks. Here is how you can modify the index.tsx file to include this functionality:

```tsx
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/user");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>Loading...</Text>}
    </View>
  );
}
```

> [!WARNING]  
> Replace "localhost" to your current IP if you are using a real device or emulator. Example: http://192.168.1.1:3000/users

👤 Prompt: `@workspace /new Create a component named UserCard the component must show the id, fullname, age and the active fields, the component, use react native style to set some style`
🤖 Copilot Answer:
Sure, here is the file you requested:

UserCard.tsx

```tsx
// components/UserCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface UserCardProps {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  active: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  firstName,
  lastName,
  age,
  active,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>ID: {id}</Text>
      <Text style={styles.fullName}>
        Full Name: {firstName} {lastName}
      </Text>
      <Text style={styles.age}>Age: {age}</Text>
      <Text style={active ? styles.active : styles.red}>
        Active: {active ? "Yes" : "No"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
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
    color: "green",
  },
  red: {
    fontSize: 16,
    color: "red",
  },
});

export default UserCard;
```

👤 Prompt:
`@workspace How can I display data from the API in #file:index.tsx using the SafeAreaView component and the FlatList component to show all items using #file:UserCard.tsx? There should be a loading indicator while the data is being loaded.`

🤖 Copilot Answer:
To display the data from the API using `SafeAreaView` and `FlatList` components, you can follow these steps:

1. **Import the necessary components**: Import `SafeAreaView` and `FlatList` from `react-native`.

2. **Update the return statement**: Use `SafeAreaView` to ensure the content is displayed within the safe area boundaries of a device. Use `FlatList` to render the list of users using the `UserCard` component.

```tsx
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
```

## Create Data (C)

### Step 8: Create another tab with a form to submit data to the REST API.

👤 Prompt:
`@workspace Show me how to create a new tab called "enroll" using the layout file #file:_layout.tsx`

🤖 Copilot Answer:

To create a new tab item menu named "enroll", you need to follow these steps:

1. **Create the Enroll Screen**: Create a new file named `enroll.tsx` in the `tabs` folder.

2. **Update the Tab Layout**: Update the `_layout.tsx` file in the `tabs` folder to include the new "enroll" tab.

Step 1: Create the Enroll Screen
Create a new file named `enroll.tsx` in the `tabs` folder:

```tsx
// app/enroll.tsx

import React from "react";

import { View, Text, StyleSheet } from "react-native";

const EnrollScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enroll Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default EnrollScreen;
```

Step 2: Update the Tab Layout
Update the `_layout.tsx` file in the `tabs` folder to include the new "enroll" tab:

```tsx
// app/_layout.tsx

import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="enroll"
        options={{
          title: "Enroll",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-add" : "person-add-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
```

👤 Prompt:
`@workspace Show me how to create a form that has the same fields as my user interface in the file #file:types.ts and, upon submission, makes a POST request to the API at /users.`

🤖 Copilot Answer:
To create a form that matches your User interface and makes a POST API call to users upon submission, follow these steps:

Create the form component: Create a new file for the form component, for example, app/UserForm.tsx.

```tsx
// components/UserForm.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { User } from "@/types";

const UserForm: React.FC = () => {
  const [user, setUser] = useState<Partial<User>>({
    firstName: "",
    lastName: "",
    age: "",
    active: false,
  });

  const handleChange = (name: keyof User, value: string | boolean) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://192.168.100.24:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        Alert.alert("Success", "User added successfully");
        setUser({ firstName: "", lastName: "", age: "", active: false });
      } else {
        Alert.alert("Error", "Failed to add user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      Alert.alert("Error", "Failed to add user");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={user.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={user.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={user.age.toString()}
        onChangeText={(text) => handleChange("age", parseInt(text))}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Active</Text>
      <Button
        title={user.active ? "Active" : "Inactive"}
        onPress={() => handleChange("active", !user.active)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: 250,
  },
});

export default UserForm;
```

2. Use the form component in your Enroll screen: Modify the enroll.tsx file to include the UserForm component.

```tsx
// FILE: app/enroll.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import UserForm from "../components/UserForm";

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
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
```

## Update data (U)

### Step 9: Update an element in the list.

👤 Prompt:
`@workspace  in the file UserCard.tsx add a function that when the user Press the card send an http call to the api with put method in order to toggle the active field, use Presseable RN component`

🤖 Copilot Answer:
Sure, here is the updated UserCard.tsx file with the function to toggle the active field using a Pressable component:

1. **Import `Pressable`**: Import `Pressable` from `react-native`.
2. **Add Press Detection**: Implement a press detection mechanism and the HTTP PUT request.

Here is the updated UserCard.tsx:

```tsx
// FILE: components/UserCard.tsx
import { User } from "@/types";
import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

interface UserCardProps {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  active: boolean;
}

const UserCard: React.FC<UserCardProps> = (user: User) => {
  const toggleActiveStatus = async () => {
    try {
      const response = await fetch(
        `http://192.168.100.24:3000/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...user, active: !user.active }),
        }
      );

      if (response.ok) {
        Alert.alert("Success", "User status updated successfully");
      } else {
        Alert.alert("Error", "Failed to update user status");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred");
    }
  };

  return (
    <Pressable
      onPress={toggleActiveStatus}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Text style={styles.id}>ID: {user.id}</Text>
      <Text style={styles.fullName}>
        Full Name: {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.age}>Age: {user.age}</Text>
      <Text style={user.active ? styles.active : styles.inactive}>
        Active: {user.active ? "Yes" : "No"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    shadowColor: "#000",
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
    fontWeight: "bold",
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
    color: "green",
  },
  inactive: {
    fontSize: 16,
    color: "red",
  },
});

export default UserCard;
```

In this code, the toggleActiveStatus function sends a PUT request to the API to toggle the active status of the user. The Pressable component is used to handle the press event on the card. When the card is pressed, the toggleActiveStatus function is called.

## Delete data (D)

### Step 10. Delete an element in the list

👤 Prompt:
`@workspace In the file #file:UserCard.tsx, add a function that, when the user long-presses the card, shows an alert asking "Are you sure you want to delete this item?". If confirmed, send an HTTP DELETE request to the API using the Pressable component from RN.`

🤖 Copilot Answer:
Sure, here is the updated UserCard.tsx file with the function to handle long press and delete the user:

```tsx
// FILE: components/UserCard.tsx
import { User } from "@/types";
import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

interface UserCardProps {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  active: boolean;
}

const UserCard: React.FC<UserCardProps> = (user: User) => {
  const toggleActiveStatus = async () => {
    try {
      const response = await fetch(
        `http://192.168.100.24:3000/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...user, active: !user.active }),
        }
      );

      if (response.ok) {
        Alert.alert("Success", "User status updated successfully");
      } else {
        Alert.alert("Error", "Failed to update user status");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred");
    }
  };

  const handleLongPress = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure to delete the element?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              const response = await fetch(
                `http://192.168.100.24:3000/users/${user.id}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              if (response.ok) {
                Alert.alert("Success", "User deleted successfully");
              } else {
                Alert.alert("Error", "Failed to delete user");
              }
            } catch (error) {
              Alert.alert("Error", "An error occurred");
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
      <Text style={styles.fullName}>
        Full Name: {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.age}>Age: {user.age}</Text>
      <Text style={user.active ? styles.active : styles.inactive}>
        Active: {user.active ? "Yes" : "No"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    shadowColor: "#000",
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
    fontWeight: "bold",
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
    color: "green",
  },
  inactive: {
    fontSize: 16,
    color: "red",
  },
});

export default UserCard;
```

In this code, the handleLongPress function shows an alert asking for confirmation to delete the user. If the user confirms, it sends a DELETE request to the API to delete the user. The Pressable component is used to handle both the press and long press events on the card.

## Step 11: Add State Management

👤 Prompt:
`Recommend me a lightweight, powerful and popular state manager that works in react native`

🤖 Copilot Answer:
A lightweight, powerful, and popular state manager that works well with React Native is Zustand. It is known for its simplicity, minimalistic API, and performance.

Key Features of Zustand:

- Minimal Boilerplate: Easy to set up and use with minimal code.
- Performance: Efficient state updates and re-renders.
- React Native Compatibility: Works seamlessly with React Native.
- Flexible: Can be used for both small and large applications.

Installation
You can install Zustand using npm or yarn:

`npm install zustand`

👤 Prompt:
`@workspace read my app/index.tsx file and tell me how to store the http response in a global state using zustand`

🤖 Copilot Answer:
To store the HTTP response in a global state using Zustand, you need to follow these steps:

Create the Zustand store: Ensure you have a Zustand store set up to manage the global state. If you don't have one, create it in store.ts.

```tsx
// FILE: store.ts
import { create } from "zustand";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  active: boolean;
}

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
}

const useStore = create<UserState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));

export default useStore;
```

Update the index.tsx file to use the Zustand store: Modify the index.tsx file to fetch data and store it in the Zustand store.

```tsx
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
```

Workspace
To store the HTTP response in a global state using Zustand, you need to follow these steps:

Create the Zustand store: Ensure you have a Zustand store set up to manage the global state. If you don't have one, create it in store.ts.

Update the index.tsx file to use the Zustand store: Modify the index.tsx file to fetch data and store it in the Zustand store.

In this setup:

The useStore hook from Zustand is used to access and update the global state.

The fetchData function fetches the user data from the API and stores it in the Zustand store using the setUsers function.

The FlatList component renders the user data from the global state.

### Use Zustand functions

👤 Prompt:
`@workspace read the files #file:store.ts, #file:UserCard.tsx and create a function to update the active field using zustand`

🤖 Copilot Answer:
To update the active field using Zustand, you need to add a function in the Zustand store to update a specific user's active status. Then, you can call this function from the UserCard component.

1. Update the Zustand store: Add a function to update the active status of a user in the Zustand store.

```tsx
// FILE: store.ts
import { create } from "zustand";
import { User } from "./types";

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  toggleUserActive: (id: string) => void;
}

const useStore = create<UserState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  toggleUserActive: (id) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      ),
    })),
}));

export default useStore;
```

2. Update the UserCard component: Modify the UserCard component to use the toggleUserActive function from the Zustand store.

```tsx
// FILE: components/UserCard.tsx
import { User } from "@/types";
import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import useStore from "../store";

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
      const response = await fetch(
        `http://192.168.100.24:3000/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...user, active: !user.active }),
        }
      );

      if (response.ok) {
        toggleUserActive(user.id);
        Alert.alert("Success", "User status updated successfully");
      } else {
        Alert.alert("Error", "Failed to update user status");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred");
    }
  };

  const handleLongPress = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure to delete the element?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              const response = await fetch(
                `http://192.168.100.24:3000/users/${user.id}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              if (response.ok) {
                Alert.alert("Success", "User deleted successfully");
              } else {
                Alert.alert("Error", "Failed to delete user");
              }
            } catch (error) {
              Alert.alert("Error", "An error occurred");
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
      <Text style={styles.fullName}>
        Full Name: {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.age}>Age: {user.age}</Text>
      <Text style={user.active ? styles.active : styles.inactive}>
        Active: {user.active ? "Yes" : "No"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    shadowColor: "#000",
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
    fontWeight: "bold",
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
    color: "green",
  },
  inactive: {
    fontSize: 16,
    color: "red",
  },
});

export default UserCard;
```

## Step 12: Create Filter

👤 Prompt:
`@workspace Create a switch with label "Active Only" in the #file:index.tsx and a function to filter users by active field`

🤖 Copilot Answer:
To add a switch with the label "Active Only" in the /app/index.tsx file and a function to filter users by the active field, follow these steps:

1. Add the switch and state to manage its value: Update the Index component to include a switch for filtering active users.
2. Filter the users based on the switch value: Implement a function to filter the users based on the active field.

```tsx
// FILE: index.tsx
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";
import UserCard from "../components/UserCard"; // Ensure the path is correct
import useStore from "../store";
import { User } from "../types";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [activeOnly, setActiveOnly] = useState(false);
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

  const filteredUsers = activeOnly
    ? users.filter((user) => user.active)
    : users;

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
      <View style={styles.switchContainer}>
        <Text>Active Only</Text>
        <Switch value={activeOnly} onValueChange={setActiveOnly} />
      </View>
      {filteredUsers.length > 0 ? (
        <FlatList
          data={filteredUsers}
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
```

## Step 13: Create Test

### Test UserCard component

👤 Prompt:
`@workspace read the #file:UserCard.tsx  and prepare the code in order to beging create tests using react-testing-library for react native, test only if user information is correctly`

🤖 Copilot Answer:
To prepare the code for creating tests for the UserCard component using `@testing-library/react-native`, you need to ensure that the component is properly structured and that the necessary dependencies are mocked. Here is the setup for the test file:

1. Install the necessary dependencies: Ensure you have @testing-library/react-native installed. If not, install it using npm or yarn.
   `npm install --save-dev @testing-library/react-native`

2. Create a test file for UserCard: Create a new test file in the **tests** directory, for example, UserCard.test.tsx.

3. Write the test cases: Write test cases to verify that the user information is displayed correctly.

Here is the code for the test file:

```ts
// FILE: components/__tests__/UserCard.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import UserCard from "../UserCard";

describe("UserCard", () => {
  const user = {
    id: "4",
    firstName: "Toni",
    lastName: "Kroos",
    age: "31",
    active: true,
  };

  it("displays the correct user information", () => {
    const { getByText } = render(<UserCard {...user} />);

    expect(getByText(`ID: ${user.id}`)).toBeTruthy();
    expect(
      getByText(`Full Name: ${user.firstName} ${user.lastName}`)
    ).toBeTruthy();
    expect(getByText(`Age: ${user.age}`)).toBeTruthy();
    expect(getByText("Active: Yes")).toBeTruthy();
  });

  it("displays inactive status correctly", () => {
    const inactiveUser = { ...user, active: false };
    const { getByText } = render(<UserCard {...inactiveUser} />);

    expect(getByText("Active: No")).toBeTruthy();
  });
});
```

You can run the tests using the following command:
`npm test`

## To Do:

1. Use GitHub Copilot to make the user creation form reactive.
2. Use GitHub Copilot to make user deletion reactive.
