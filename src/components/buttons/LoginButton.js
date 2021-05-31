import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import PropTypes from "prop-types";
import { VerticalSeparator } from "../seperators/verticalSeparator";

const LoginButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}>

      <View style={styles.content}>
        <Image style={styles.icon} source={props.icon} />

        <VerticalSeparator style={styles.separator} />

        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LoginButton;

LoginButton.defaultProps = {
  title: "text",
  icon: "",
};

LoginButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteTransparent,
    width: wp(240),
    height: hp(35),
    justifyContent: "center",
    paddingLeft: wp(11.5),
    marginBottom: hp(8),
    borderRadius: hp(6),
  },
  content: {
    flexDirection: "row",
    alignItems:'center'
  },
  icon: {
    resizeMode: "center",
    width: wp(25),
    height: wp(25),
  },
  title: {
    marginLeft: wp(12),
    fontSize: wp(15),
    fontWeight: "400",
    color: Colors.white,
  },
  separator: {
    marginLeft: wp(10),

  },
});
