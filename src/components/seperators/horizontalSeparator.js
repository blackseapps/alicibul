import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../styles/Colors";
import { wp } from "../../styles/Dimen";

export const HorizontalSeparator = (props) => {
  return <View style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.8)",
    height: 0.4,
    width: wp(118),
  },
});
