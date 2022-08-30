import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Linking, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Mash");
  const [session, setSession] = useState({ number: 6, title: "state" });
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName("Programming with Amrut");
    setSession({ number: 7, title: "state changed" });
    setCurrent(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is {name}'s channel</Text>
      <Text style={styles.text}>
        This is session number {session.number} {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? "current session" : "next session"}
      </Text>
      <Button
        style={styles.btn}
        title="click to check"
        onPress={onClickHandler}
      ></Button>
    </View>
  );
}
//#C4E8C2 #AECFA4 #6BBD99

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4E8C2",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#6BBD99",
    margin: 10,
  },
});
