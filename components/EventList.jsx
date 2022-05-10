import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import base from "../api/base"

import Events from "./Events"

export default function EventList() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    base("tblzVrtPuEd6PpMEg")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setEvent(records);
        fetchNextPage();
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        {event.length > 0 ? (
          <>
            {event.map((elm) => (
              <Events key={elm.id} event={elm} />
            ))}
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer : {
    display:"flex",
    justifyContent:"center",
  },

  eventcontainer : {
    display:"flex",
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "spaceAround",
    padding:20,
    fontSize:20,
  },

  firstcontainer : {
    paddingRight : 50,
  }
})
