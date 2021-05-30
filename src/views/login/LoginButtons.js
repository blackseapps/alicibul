import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import * as Images from "../../assets/images";
import { Colors } from "../../styles/Colors";
import LoginButton from "../../components/buttons/LoginButton";

const Background = (props) => {
  return (
    <View style={styles.container}>

      <LoginButton />

      <LoginButton />

      <LoginButton />

      <LoginButton />

      <LoginButton />

    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageBg: {
    position: "absolute",
    width: wp(375),
    height: hp(812),
  },
});
