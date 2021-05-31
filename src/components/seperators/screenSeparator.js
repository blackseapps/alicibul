import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../styles/Colors";
import { HorizontalSeparator } from "./horizontalSeparator";
import { wp } from "../../styles/Dimen";

export const ScreenSeparator = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <HorizontalSeparator />

      <Text style={styles.text}>veya</Text>

      <HorizontalSeparator />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: wp(20),
    marginRight: wp(20),
    color: Colors.white,
    fontSize: wp(15),
    fontWeight: "400",
  },
});
