# 💻 Actividad
Desarrollo de una aplicación en React Native utilizando GitHub Copilot

# 🎯 Objetivo General:
Demostrar el impacto de GitHub Copilot en la mejora de la agilidad y la aceleración del proceso de desarrollo dentro de un proyecto de React Native. Resaltar cómo Copilot puede generar eficientemente componentes clave y proporcionar sugerencias inteligentes para bibliotecas que ayuden a abordar desafíos específicos.

# ✅ Objetivos Específicos:

✓ Construir una aplicación CRUD funcional para crear, leer, actualizar y eliminar datos de una API con la asistencia de GitHub Copilot. Mostrar cómo Copilot mejora el proceso de desarrollo generando archivos que simulan una base de datos o proporcionando recomendaciones inteligentes sobre las mejores bibliotecas a usar para tareas específicas.

✓ Escribir y ejecutar pruebas con la ayuda de GitHub Copilot. Resaltar cómo Copilot facilita la creación de pruebas unitarias, asegurando la confiabilidad y corrección del código, mientras agiliza el proceso general de pruebas.

# 📦 Resultados Esperados
✓ Aumento de la productividad: Al final, habrás dominado cómo aprovechar GitHub Copilot para mejorar enormemente tu productividad en el desarrollo de React Native (Expo). Desde la configuración del proyecto y la generación de código hasta la gestión de archivos y las pruebas, Copilot agiliza cada paso del flujo de trabajo de desarrollo.

✓ Implementación de funciones: Obtendrás conocimientos sobre cómo Copilot ayuda a crear y refinar funciones para el procesamiento y la adición de datos, mejorando tanto la eficiencia como la efectividad de tu proceso de codificación.

✓ Pruebas optimizadas: Estarás equipado para utilizar Copilot para escribir y ejecutar pruebas unitarias, asegurando una calidad y rendimiento robustos del código.

# 🛠 Requisitos
- VS Code
- Node +18 instalado (se recomienda nvm)
- Extensión de GitHub Copilot habilitada
- Dispositivo: (recomendado)
    - iOS: iPhone o iPad +11
    - Android: Dispositivo Android +5.0
      - SDK de Android o Android Studio
- Software:
  - Se recomienda la versión LTS de Node.js
  - Expo CLI: npm install -g expo-cli
  - Phone Link instalado en la PC (Windows) (Para compartir la pantalla del móvil en la PC)

> [!WARNING]
> Si estás usando Windows Subsystem for Linux (WSL2), usa directamente Windows PowerShell.

> [!IMPORTANT]
> A lo largo del tutorial, usaremos un dispositivo Android con Windows 10.

# 🦾 Vamos a codificar

### Paso 1. Conectar tu dispositivo con el entorno de desarrollo (Opcional)
- Dispositivo:  
  - Abre Expo Go  
- PC:  
  - En la consola donde Expo se está ejecutando, escanea el código QR con tu dispositivo.

Deberías ver cómo Expo construye la aplicación en la consola de tu PC, y luego la aplicación de Expo aparecerá en tu dispositivo.


### Paso 2. Eliminar código innecesario.

👤 Prompt:  
`@workspace lee el archivo #file:package.json y dime si hay algún comando para resetear el proyecto y cómo ejecutar el comando`

🤖 Respuesta de Copilot:  
Sí, hay un comando para resetear el proyecto en el archivo package.json. El script `reset-project` está definido de la siguiente manera:
```json
"scripts": {
  "reset-project": "node ./scripts/reset-project.js"
}
```

Para ejecutar el comando, utiliza lo siguiente en tu terminal:
`npm run reset-project`

## Configuración de la API REST  
### Paso 3. Crear datos simulados  
👤 Prompt:  
`@workspace /new Crea un archivo llamado db.json en la raíz del proyecto. Este archivo debe contener una clave llamada users, y users debe ser un array de elementos con los siguientes campos: id, firstName, lastName, age y un campo booleano para indicar si están activos. Usa datos de los jugadores de fútbol del Real Madrid para la información, todos los campos deben ser de tipo cadena excepto active, active debe ser booleano.`

🤖 Respuesta de Copilot:  
Aquí está el contenido para el archivo db.json con datos de los jugadores de fútbol del Real Madrid:

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

### Paso 4. Crear un Servidor Simulado

👤 Prompt:  
`@workspace Lee el archivo #file:db.json y recomiéndame una biblioteca de JS que me permita crear una API REST a partir del db.json. Agrega el script para ejecutar el servidor en el archivo #file:package.json.`

🤖 Respuesta de Copilot:  
Para crear una API REST a partir del archivo db.json, puedes usar la biblioteca json-server. Aquí te explico cómo agregarla a tu proyecto y actualizar el archivo package.json para incluir un script que ejecute el servidor.

Primero, instala json-server:  
`npm install json-server --save-dev`

A continuación, actualiza el archivo package.json para incluir un script que ejecute el servidor:  
`"serve-api": "json-server --watch db.json --port 3000"`

Ahora, puedes ejecutar el servidor con el siguiente comando:  
`npm run serve-api`

Esto iniciará un servidor API REST en http://localhost:3000 basado en la estructura de tu archivo db.json.

Ejemplo de uso:  
- Obtener todos los usuarios: GET http://localhost:3000/users  
- Obtener un usuario por ID: GET http://localhost:3000/users/1  
- Agregar un nuevo usuario: POST http://localhost:3000/users  
- Actualizar un usuario: PUT http://localhost:3000/users/1  
- Eliminar un usuario: DELETE http://localhost:3000/users/1  

## Leer datos (R)  
### Paso 5. Crear un menú de pestañas inferior llamado INICIO  

👤 Prompt:  
`¿Cómo puedo crear una nueva pestaña llamada inicio en la carpeta /app, usando el archivo #file:index.tsx como la página de la pestaña?`

🤖 Respuesta de Copilot:  
Para crear una nueva pestaña llamada "Inicio" en la carpeta /app y usar el archivo index.tsx como la página de la pestaña, sigue estos pasos:

1. Asegúrate de que el archivo index.tsx esté configurado correctamente: El archivo index.tsx ya está configurado como se muestra en el contexto proporcionado.

2. Actualiza el archivo _layout.tsx para incluir la nueva pestaña de Inicio: Modifica el archivo _layout.tsx para incluir el componente index.tsx como una pestaña.

```tsx
// app/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```
Con estos pasos, tendrás una nueva pestaña llamada "Inicio" en la carpeta /app, y el archivo index.tsx se utilizará como la página para esta pestaña. La pestaña de Inicio mostrará el contenido definido en index.tsx.

### Paso 6. Crear una interfaz de datos  
👤 Prompt:  
`@workspace /new Lee el archivo #file:db.json y crea un archivo llamado types.ts y crea una interfaz con los datos en db.json.`

🤖 Respuesta de Copilot:  
Claro, aquí está el archivo que solicitaste:  
`types.ts`


### Paso 7. Mostrar datos desde la API REST  

👤 Prompt:  
Crea una función en el archivo #file:index.tsx que realice una solicitud GET a la URL `localhost:3000/user` para almacenar los datos en una variable y luego mostrar los datos en la pantalla, usa fetch.

🤖 Respuesta de Copilot:  
Para realizar una solicitud GET a la URL http://localhost:3000/users y mostrar los datos en la pantalla, puedes usar la API fetch en combinación con los hooks useEffect y useState de React. Aquí te explico cómo puedes modificar el archivo index.tsx para incluir esta funcionalidad:

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
      {data ? (
        <Text>{JSON.stringify(data)}</Text>
      ) : (
        <Text>Cargando...</Text>
      )}
    </View>
  );
}
```

> [!WARNING]   
> Reemplaza "localhost" por tu IP actual, ejemplo: http://192.168.1.1:3000/users

👤 Prompt:  
`@workspace /new Crea un componente llamado UserCard. El componente debe mostrar los campos id, nombre completo, edad y activo, usa estilos de React Native para establecer algunos estilos.`

🤖 Respuesta de Copilot:  
Claro, aquí está el archivo que solicitaste:

UserCard.tsx

```tsx
// components/UserCard.tsx
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
      <Text style={styles.fullName}>Nombre Completo: {firstName} {lastName}</Text>
      <Text style={styles.age}>Edad: {age}</Text>
      <Text style={active ? styles.active : styles.red}>Activo: {active ? 'Sí' : 'No'}</Text>
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
```

👤 Prompt:  
`Muéstrame cómo puedo mostrar los datos de la API en #file:index.tsx usando el componente SafeAreaView y el componente FlatList para mostrar todos los elementos usando UserCard.`

🤖 Respuesta de Copilot:  
Para mostrar los datos de la API utilizando los componentes `SafeAreaView` y `FlatList`, puedes seguir estos pasos:

1. **Importa los componentes necesarios**: Importa `SafeAreaView` y `FlatList` de `react-native`.

2. **Actualiza la declaración de retorno**: Usa `SafeAreaView` para asegurarte de que el contenido se muestre dentro de los límites seguros de un dispositivo. Usa `FlatList` para renderizar la lista de usuarios utilizando el componente `UserCard`.

```tsx
import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet } from "react-native";
import UserCard from "../components/UserCard"; // Asegúrate de que la ruta sea correcta
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
          <Text>Cargando...</Text>
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

## Crear Datos (C)

### Paso 8: Crear otra pestaña con un formulario para enviar datos a la API REST.

👤 Prompt:  
`@workspace Muéstrame cómo crear una nueva pestaña llamada "enroll"`

🤖 Respuesta de Copilot:

Para crear un nuevo elemento de menú de pestañas llamado "enroll", necesitas seguir estos pasos:
1. **Crear la pantalla de inscripción**: Crea un nuevo archivo llamado `enroll.tsx` en la carpeta `tabs`.

2. **Actualizar el diseño de la pestaña**: Actualiza el archivo `_layout.tsx` en la carpeta `tabs` para incluir la nueva pestaña "enroll".

Paso 1: Crear la pantalla de inscripción
Crea un nuevo archivo llamado `enroll.tsx` en la carpeta `tabs`:

```tsx
// app/tabs/enroll.tsx

import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EnrollScreen;
```

Paso 2: Actualizar el Diseño de la Pestaña
Actualiza el archivo `_layout.tsx` en la carpeta `tabs` para incluir la nueva pestaña "enroll":

```tsx
// app/tabs/_layout.tsx

import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="enroll"
        options={{
          title: 'Enroll',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-add' : 'person-add-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

👤 Prompt:
`@workspace Muéstrame cómo crear un formulario que tenga los mismos campos que mi interfaz de usuario y que, al enviarlo, realice una llamada POST a la API en /users`

🤖 Respuesta de Copilot:
Para crear un formulario que coincida con tu interfaz de usuario y realice una llamada POST a usuarios al enviarlo, sigue estos pasos:

Crea el componente del formulario: Crea un nuevo archivo para el componente del formulario, por ejemplo, `app/UserForm.tsx`.

```tsx
// components/UserForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { User } from '@/types';

const UserForm: React.FC = () => {
  const [user, setUser] = useState<Partial<User>>({
    firstName: '',
    lastName: '',
    age: '',
    active: false,
  });

  const handleChange = (name: keyof User, value: string | boolean) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://192.168.100.24:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        Alert.alert('Success', 'User added successfully');
        setUser({ firstName: '', lastName: '', age: '', active: false });
      } else {
        Alert.alert('Error', 'Failed to add user');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      Alert.alert('Error', 'Failed to add user');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={user.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={user.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={user.age.toString()}
        onChangeText={(text) => handleChange('age', parseInt(text))}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Active</Text>
      <Button
        title={user.active ? 'Active' : 'Inactive'}
        onPress={() => handleChange('active', !user.active)}
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

export default UserForm;
```

2. Usa el componente del formulario en tu pantalla de Inscripción: Modifica el archivo `enroll.tsx` para incluir el componente `UserForm`.


```tsx
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
```

## Actualizar datos (U)

### Paso 9: Actualizar un elemento en la lista.

👤 Prompt:
`@workspace en el archivo UserCard.tsx agrega una función que, cuando el usuario presione la tarjeta, envíe una llamada HTTP a la API con el método PUT para alternar el campo activo, usa el componente Pressable de RN`

🤖 Respuesta de Copilot:
Claro, aquí está el archivo actualizado UserCard.tsx con la función para alternar el campo activo usando un componente Pressable:

1. **Importar `Pressable`**: Importa `Pressable` desde `react-native`.

2. **Agregar detección de presión**: Implementa un mecanismo de detección de presión y la solicitud HTTP PUT.

Aquí está el UserCard.tsx actualizado:

```tsx
// FILE: components/UserCard.tsx
import { User } from '@/types';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

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
      const response = await fetch(`http://192.168.100.24:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...user, active: !user.active }),
      });

      if (response.ok) {
        Alert.alert('Success', 'User status updated successfully');
      } else {
        Alert.alert('Error', 'Failed to update user status');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred');
    }
  };

  return (
    <Pressable onPress={toggleActiveStatus} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
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
```

En este código, la función `toggleActiveStatus` envía una solicitud PUT a la API para alternar el estado activo del usuario. El componente `Pressable` se utiliza para manejar el evento de presión en la tarjeta. Cuando se presiona la tarjeta, se llama a la función `toggleActiveStatus`.


## Eliminar datos (D)
### Paso 10. Eliminar un elemento de la lista
👤 Prompt:
`@workspace en el archivo UserCard.tsx añade una función que, cuando el usuario mantenga presionada la tarjeta, muestre una alerta preguntando "¿estás seguro de eliminar el elemento?", si es así, envía una llamada HTTP a la API con el método DELETE, utiliza el componente Pressable de RN`

🤖 Respuesta de Copilot:
Claro, aquí está el archivo UserCard.tsx actualizado con la función para manejar la presión prolongada y eliminar al usuario:

```tsx
// FILE: components/UserCard.tsx
import { User } from '@/types';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

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
      const response = await fetch(`http://192.168.100.24:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...user, active: !user.active }),
      });

      if (response.ok) {
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
```

En este código, la función handleLongPress muestra una alerta pidiendo confirmación para eliminar al usuario. Si el usuario confirma, envía una solicitud DELETE a la API para eliminar al usuario. El componente Pressable se utiliza para manejar tanto los eventos de presión como de presión prolongada en la tarjeta.


## Paso 11: Agregar Manejo de Estado

👤 Prompt:
`Recomiéndame un gestor de estado ligero, potente y popular que funcione en React Native`

🤖 Respuesta de Copilot:
Un gestor de estado ligero, potente y popular que funciona bien con React Native es Zustand. Es conocido por su simplicidad, API minimalista y rendimiento.

Características clave de Zustand:
- Mínimo código boilerplate: Fácil de configurar y usar con un código mínimo.
- Rendimiento: Actualizaciones de estado y re-renderizados eficientes.
- Compatibilidad con React Native: Funciona sin problemas con React Native.
- Flexible: Puede ser utilizado tanto para aplicaciones pequeñas como grandes.

Instalación
Puedes instalar Zustand usando npm o yarn:

`npm install zustand`

👤 Prompt:
`@workspace lee mi archivo app/index.tsx y dime cómo almacenar la respuesta http en un estado global usando zustand`

🤖 Respuesta de Copilot:
Para almacenar la respuesta HTTP en un estado global usando Zustand, necesitas seguir estos pasos:

Crea la store de Zustand: Asegúrate de tener un store de Zustand configurada para gestionar el estado global. Si no tienes una, créala en store.ts.

```tsx
// FILE: store.ts
import { create } from 'zustand';

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

Actualiza el archivo index.tsx para usar el store de Zustand Modifica el archivo index.tsx para obtener datos y almacenarlos en el store de Zustand.



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


Para almacenar la respuesta HTTP en un estado global usando Zustand, debes seguir estos pasos:

Crear la store de Zustand: Asegúrate de tener una store de Zustand configurada para gestionar el estado global. Si no tienes una, créala en `store.ts`.

Actualizar el archivo index.tsx para usar la store de Zustand: Modifica el archivo index.tsx para obtener datos y almacenarlos en la store de Zustand.

En esta configuración:

Se utiliza el hook `useStore` de Zustand para acceder y actualizar el estado global.

La función `fetchData` obtiene los datos del usuario de la API y los almacena en la store de Zustand utilizando la función `setUsers`.

El componente `FlatList` renderiza los datos del usuario desde el estado global.


### Usar funciones de Zustand

👤 Prompt:
`@workspace lee el #archivo:store.ts y el #archivo:UserCard.tsx y crea una función para actualizar el campo active usando zustand`

🤖 Respuesta de Copilot:
Para actualizar el campo active usando Zustand, necesitas agregar una función en la tienda de Zustand para actualizar el estado activo de un usuario específico. Luego, puedes llamar a esta función desde el componente UserCard.

1. Actualizar la tienda de Zustand: Agrega una función para actualizar el estado activo de un usuario en la tienda de Zustand.

```tsx
// FILE: store.ts
import { create } from 'zustand';
import { User } from './types';

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  toggleUserActive: (id: string) => void;
}

const useStore = create<UserState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  toggleUserActive: (id) => set((state) => ({
    users: state.users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
    ),
  })),
}));

export default useStore;
```

2. Actualiza el componente UserCard: Modifica el componente UserCard para que use la función toggleUserActive del store de Zustand.

```tsx
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

```

## Paso 12: Crear Filtro

👤 Prompt:
`@workspace Crea un interruptor con la etiqueta "Solo Activos" en el #file:index.tsx y una función para filtrar usuarios por el campo activo`

🤖 Respuesta de Copilot:
Para agregar un interruptor con la etiqueta "Solo Activos" en el archivo /app/index.tsx y una función para filtrar usuarios por el campo activo, sigue estos pasos:

1. Agrega el interruptor y el estado para gestionar su valor: Actualiza el componente Index para incluir un interruptor para filtrar usuarios activos.
2. Filtra los usuarios según el valor del interruptor: Implementa una función para filtrar los usuarios según el campo activo.


```tsx
// FILE: index.tsx
import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, Switch } from "react-native";
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

  const filteredUsers = activeOnly ? users.filter((user) => user.active) : users;

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

## Paso 13: Crear Prueba (Unit Test)

### Probar el componente UserCard
👤 Prompt:
`@workspace lee el #file:UserCard.tsx y prepara el código para comenzar a crear pruebas usando react-testing-library para react native, prueba solo si la información del usuario es correcta`

🤖 Respuesta de Copilot:
Para preparar el código para crear pruebas para el componente UserCard utilizando `@testing-library/react-native`, necesitas asegurarte de que el componente esté correctamente estructurado y que las dependencias necesarias estén simuladas. Aquí está la configuración para el archivo de prueba:

1. Instala las dependencias necesarias: Asegúrate de tener @testing-library/react-native instalado. Si no lo tienes, instálalo usando npm o yarn.
   `npm install --save-dev @testing-library/react-native`

2. Crea un archivo de prueba para UserCard: Crea un nuevo archivo de prueba en el directorio __tests__, por ejemplo, UserCard.test.tsx.

3. Escribe los casos de prueba: Escribe casos de prueba para verificar que la información del usuario se muestre correctamente.

Aquí está el código para el archivo de prueba:

```ts
// FILE: components/__tests__/UserCard.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import UserCard from '../UserCard';

describe('UserCard', () => {
  const user = {
    id: '4',
    firstName: 'Toni',
    lastName: 'Kroos',
    age: '31',
    active: true,
  };

  it('displays the correct user information', () => {
    const { getByText } = render(<UserCard {...user} />);

    expect(getByText(`ID: ${user.id}`)).toBeTruthy();
    expect(getByText(`Full Name: ${user.firstName} ${user.lastName}`)).toBeTruthy();
    expect(getByText(`Age: ${user.age}`)).toBeTruthy();
    expect(getByText('Active: Yes')).toBeTruthy();
  });

  it('displays inactive status correctly', () => {
    const inactiveUser = { ...user, active: false };
    const { getByText } = render(<UserCard {...inactiveUser} />);

    expect(getByText('Active: No')).toBeTruthy();
  });
});
```


Puedes ejecutar las pruebas utilizando el siguiente comando:
`npm test`