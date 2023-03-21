import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home";
import EmptyScreen from "./EmptyScreen"
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
       <Drawer.Screen name="Social Sharing" component={EmptyScreen} />
        <Drawer.Screen name="Customer Support" component={EmptyScreen} />
        <Drawer.Screen name="Safety Information" component={EmptyScreen} />
        <Drawer.Screen name="Over Speed Alert" component={EmptyScreen} />
        <Drawer.Screen name="Uses Tips" component={EmptyScreen} />
        <Drawer.Screen name="Status Updates" component={EmptyScreen} />
        <Drawer.Screen name="NotiFication" component={EmptyScreen} />

      <Stack.Screen name="Settings" component={EmptyScreen} />
    </Drawer.Navigator>
  );
}
