import { Text, View, Button } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventList from "./EventList";
import NewEvent from "./NewEvent";
import Events from "./Events";


import base from "../api/base";

export default function HomeScreen({ navigation }) {


  useEffect(() => {
    base("tblzVrtPuEd6PpMEg")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        fetchNextPage();
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Events List"
        onPress={() => navigation.navigate("EventList")}
      />
      <NewEvent />
    </View>
  );
}
