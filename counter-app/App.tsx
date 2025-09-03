import { StatusBar } from "expo-status-bar";

import { Pressable, StyleSheet, Text, View } from "react-native";
import CounterHook from "./hooks/CounterHook";
import FAB from "./components/FAB/FAB";

export default function App() {
  const { count, onDecrementHandler, onIncrementHandler, onResetHandler } =
    CounterHook({});

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <StatusBar style="auto" />
      <FAB
        title="+1"
        style={({ pressed }) => ({ right: 20, opacity: pressed ? 0.5 : 1 })}
        onPress={onIncrementHandler}
        onLongPress={onResetHandler}
      />
      <FAB
        title="-1"
        style={({ pressed }) => ({ left: 20, opacity: pressed ? 0.5 : 1 })}
        onPress={onDecrementHandler}
        onLongPress={onResetHandler}
      />
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
