import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../styles/Colors";

export const VerticalSeparator = (props) => {
  return <View style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    width: 0.4,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
});
