import React, { FC } from "react";
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  Text,
} from "react-native";

interface FABProps extends PressableProps {
  title: string;
}

const FAB: FC<FABProps> = ({ title, style: clientStyle, ...rest }) => {
  const combinedStyle = (state: PressableStateCallbackType) => {
    const evaluatedClientStyle =
      typeof clientStyle === "function" ? clientStyle(state) : clientStyle;

    return [
      style.fab,
      evaluatedClientStyle,
      { opacity: state.pressed ? 0.5 : 1 },
    ];
  };

  return (
    <Pressable style={combinedStyle} {...rest}>
      <Text style={style.fabText}>{title}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558F",
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
    borderRadius: 10,
  },
  fabText: {
    color: "white",
    fontSize: 20,
  },
});

export default FAB;
