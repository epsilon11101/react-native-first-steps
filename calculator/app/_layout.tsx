import { Slot } from "expo-router";
import { View, Text } from "react-native";

const RootLayout = () => {
  return (
    <View>
      <Text>Header</Text>
      <Text>ROOT LAYOUT</Text>
      <Text>Footer</Text>
      <Slot />
    </View>
  );
};

export default RootLayout;
