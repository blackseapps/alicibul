import React from "react";
import { StyleSheet, View } from "react-native";

export const VerticalSeperator = (props) => {
  return <View style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    width: 1,
  },
});
