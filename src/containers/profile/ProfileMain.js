import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { wp, hp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";

const ProfileMain = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};


export default ProfileMain;


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
