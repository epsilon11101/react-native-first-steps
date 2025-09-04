import { FC } from "react";
import { Text, type TextProps } from "react-native";
import { globalStyles } from "../global-styles";

interface ThemeTextProps extends TextProps {
  variant?: "h1" | "h2";
}

const ThemeText: FC<ThemeTextProps> = ({
  children,
  variant = "h1",
  ...rest
}) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" ? globalStyles.mainResult : globalStyles.subResult,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
