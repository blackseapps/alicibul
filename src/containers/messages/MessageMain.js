import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { wp, hp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";

const MessageMain = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
    </View>
  );
};


export default MessageMain;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: wp(15),
  },
});
