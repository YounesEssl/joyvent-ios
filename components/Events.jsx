import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Events({ event }) {

  return (
    <View style={styles.maincontainer}>
      <View style={styles.contain}>
        <View style={styles.firstcontainer}>
          <View style={styles.eventitems}>
            <Text style={styles.textitem}>{event.fields.Name}'s Event</Text>  
          </View>
          <View style={styles.eventitems}>
            <Text style={styles.textitem}>{event.fields.Hour}</Text>
          </View>
        </View>
        <View style={styles.eventitems}>
          <Text style={styles.textitem}>{event.fields.Location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain : {
    borderWidth:1,
    width:300,
    padding:10,
  },

  firstcontainer :{
    display:"flex",
    borderWith:1,
  },

  textitem : {
    fontSize:20
  },

  firstcontainer : {
    marginTop:10,
  }
})