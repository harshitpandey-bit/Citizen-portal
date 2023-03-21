import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NativeBaseProvider} from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Root from "./Root";
import AuthScreen from "./AuthScreen";
import Home from "./Home"
function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
      />
    </View>
  );
}


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
     <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome " component={AuthScreen}  />
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
    </NativeBaseProvider>
  );
}

export default App;
