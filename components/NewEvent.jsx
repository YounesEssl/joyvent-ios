import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react/cjs/react.development";
import base from "../api/base";

export default function NewEvent() {
  const nameRef = useRef();
  const hourRef = useRef();
  const locationRef = useRef();
  const passwordRef = useRef();

  const newEvent = (elm) => {
    elm.preventDefault();
    const Name = nameRef.current.value;
    const Hour = hourRef.current.value;
    const Location = locationRef.current.value;
    const Password = passwordRef.current.value;
    base("tblzVrtPuEd6PpMEg").create(
      { Name, Hour, Location, Password },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        prompt(record.getId());
      }
    );
  };

  return (
    <View style={styles.formcontainer}>
      <View style={styles.sndformcontainer}>
        <Text style={styles.title}>Create Your Event</Text>
        <SafeAreaView style={styles.form}>
          <View class="space">
            <Text style={styles.Text}>Your Name</Text>
            <TextInput
              style={styles.formcontrol}
              id="inputName"
              aria-describedby="nameHelp"
              ref={nameRef}
            />
          </View>
          <View style={styles.space}>
            <Text style={styles.Text}>Hour</Text>
            <TextInput
              style={styles.formcontrol}
              id="inputHour"
              ref={hourRef}
            />
          </View>
          <View style={styles.space}>
            <Text style={styles.Text}>Location</Text>
            <TextInput
              value={"test"}
              style={styles.formcontrol}
              id="inputLocation"
              ref={locationRef}
            />
          </View>
          <View class="space">
            <Text style={styles.Text}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.formcontrol}
              id="inputLocation"
              ref={passwordRef}
            />
          </View>
          <Button
            type="submit"
            title="Create Event"
            onClick={newEvent}
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
    background: "#f7fff7",
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
