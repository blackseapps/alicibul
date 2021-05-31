import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { avenirHeavy } from "../../assets/fonts";

const SignInButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={styles.text}>Giriş Yapın</Text>
    </TouchableOpacity>
  );
};

export default SignInButton;

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontSize: wp(15),
    color: Colors.white,
    opacity: 0.8,
    fontFamily: avenirHeavy,
    textAlign: "center",
  },
});
