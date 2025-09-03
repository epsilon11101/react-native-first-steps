import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const onPressHandler = () => {
    setCount((prev) => prev + 1);
  };

  const onLongPressHandler = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={onPressHandler}
        style={styles.floatingButton}
        onLongPress={onLongPressHandler}
      >
        <Text style={{ color: "white", fontSize: 20 }}>+1</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHuge: {
    fontSize: 50,
    fontWeight: "800",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#65558F",
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
    borderRadius: 10,
  },
});
