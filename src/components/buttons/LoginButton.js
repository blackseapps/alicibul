import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import PropTypes from "prop-types";
import { VerticalSeperator } from "../seperators/verticalSeperator";

const LoginButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}>

      <View style={styles.content}>
        <Image source={props.icon} />

        <VerticalSeperator />

        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;

LoginButton.defaultProps = {
  title: "text",
  icon: "",
  iconSize: 20,
  buttonColor: Colors.Primary,
  loading: false,
  style: {
    height: hp(44),
    width: wp(276),
    marginBottom: hp(20),
    borderRadius: hp(15),
  },
};

LoginButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  iconVisible: PropTypes.bool,

  buttonColor: PropTypes.string,
  loading: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flexDirection: "row",
  },
});
