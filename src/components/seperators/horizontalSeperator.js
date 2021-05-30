import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../styles/Colors";

export const HorizontalSeperator = (props) => {
  return <View style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary,
    height: 1,
  },
});
