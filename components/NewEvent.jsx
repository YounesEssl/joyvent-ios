import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState, useEffect } from "react/cjs/react.development";
import base from "../api/base";
import * as Location from "expo-location";

export default function NewEvent() {

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
          let getadress = `${response[0].city}`;
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

  const nameRef = useRef();
  const hourRef = useRef();
  const locationRef = useRef();
  const passwordRef = useRef();
  const [name, setName] = useState("");
  const [hour, setHour] = useState("");
  const [getLocation, setGetLocation] = useState("");
  const [password, setPassword] = useState("");
  
  const newEvent = (elm) => {
    elm.preventDefault();
    const Name = name;
    const Hour = hour;
    const Location = getLocation;
    const Password = password;
    base("tblzVrtPuEd6PpMEg").create(
      { Name, Hour, Location, Password },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        alert(record.getId());
      }
    );
  };

  

  return (
    <View style={styles.formcontainer}>
      <View style={styles.sndformcontainer}>
        <Text style={styles.title}>Create Your Event</Text>
        <SafeAreaView style={styles.form}>
          <View>
            <Text style={styles.Text}>Your Name</Text>
            <TextInput
              style={styles.formcontrol}
              id="inputName"
              aria-describedby="nameHelp"
              onChangeText= {elm => (setName(elm))}
            />
          </View>
          <View style={styles.space}>
            <Text style={styles.Text}>Hour</Text>
            <TextInput
              style={styles.formcontrol}
              id="inputHour"
              onChangeText= {elm => (setHour(elm))}
            />
          </View>
          <View style={styles.space}>
            <Text style={styles.Text}>Location</Text>
            <TextInput
              value={adress}
              style={styles.formcontrol}
              id="inputLocation"
              onChangeText= {elm => (setGetLocation(elm))}
            />
          </View>
          <View>
            <Text style={styles.Text}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.formcontrol}
              id="inputLocation"
              onChangeText= {elm => (setPassword(elm))}
            />
          </View>
          <Button
            type="submit"
            title="Create Event"
            onPress={newEvent}
          ></Button>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 250,
    height: 250,
    padding: 20,
  },

  title : {
    textAlign: "center",
    marginTop:20,
    fontSize:25,
  },

  formcontrol: {
    borderWidth: 1,
  },

  formcontainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  sndformcontainer: {
    borderWidth: 1,
  },

  space: {
    display: "flex",
    justifyContent: "space-between",
  },

  input: {
    borderWidth: 1,
    background: "#F7FFF7",
  },

  button: {
    padding: 4,
    borderRadius: 100,
    background: "#4f6d7a",
    color: "#f7fff7",
    fontSize: 20,
    border: "none",
  },
});
