import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Linking, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Amrutsagar!");
  const [session, setSession] = useState({ number: 6, title: "state" });
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName("Style tes doing!");
  };

  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  view1: {
    width: 100,
    height: 100,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    width: 100,
    height: 100,

    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 35,
    fontStyle: "italic",
    margin: 10,
  },
});
