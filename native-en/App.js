import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Linking,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    {
      key: 1,
      item: "ITEM 1",
    },
    {
      key: 2,
      item: "ITEM 2",
    },
    {
      key: 3,
      item: "ITEM 3",
    },
    {
      key: 4,
      item: "ITEM 4",
    },
    {
      key: 5,
      item: "ITEM 5",
    },
    {
      key: 6,
      item: "ITEM 6",
    },
    {
      key: 7,
      item: "ITEM 7",
    },
    {
      key: 8,
      item: "ITEM 8",
    },
    {
      key: 9,
      item: "ITEM 9",
    },
    {
      key: 10,
      item: "ITEM 10",
    },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, { key: 69, item: "ITEM 69" }]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={["#ff00ff"]}
        />
      }
      style={styles.body}
    >
      {items.map((i) => {
        return (
          <View style={styles.item} key={i.id}>
            <Text style={styles.text}>{i.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "yellow",
  },
  item: {
    margin: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 35,
    fontStyle: "italic",
    margin: 10,
  },
});
