import { Colors } from "@/constants/Colors";
import ThemeText from "@/styles/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import { View, Text } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText numberOfLines={1} adjustsFontSizeToFit>
        50 X 5000000000000000000000
      </ThemeText>
      <ThemeText variant="h2">+ 250</ThemeText>
    </View>
  );
};

export default CalculatorApp;
