import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Home";
import EventList from "./components/EventList";
import NewEvent from "./components/NewEvent";

const Stack = createNativeStackNavigator();
  
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventList" component={EventList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
