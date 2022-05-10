import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react/cjs/react.development";

import * as Location from "expo-location";

export default function Events({ event }) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [adress, setAdress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let getlocation = await Location.getCurrentPositionAsync({});
      if (getlocation) {
        const latitude = getlocation.coords.latitude;
        const longitude = getlocation.coords.longitude;
        let response = await Location.reverseGeocodeAsync({latitude, longitude})
        console.log(response)
          let getadress = `${response[0].city}`;
          console.log(getadress)
        setAdress(getadress);
      }
      setLocation(getlocation)
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = adress;
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          {/* <DeleteBtn eventID={eventId} passwordField={passwordfield}/> */}
          <View >
            <Text>{event.fields.Name}'s Event</Text>  
          </View>
          <View >
            <Text>{event.fields.Hour}</Text>
          </View>
        </View>
        <View >
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    display:"flex",

  }
})