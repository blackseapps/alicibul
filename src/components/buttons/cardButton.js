import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import PropTypes from "prop-types";
import { VerticalSeparator } from "../seperators/verticalSeparator";

const CardButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}>


      <Text style={styles.title}>{props.title}</Text>

    </TouchableOpacity>
  );
};

export default CardButton;

CardButton.defaultProps = {
  title: "text",
  icon: "",
};

CardButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary,
    width: wp(219),
    height: hp(44),
    justifyContent: "center",
    borderRadius: hp(6),
  },
  title: {
    textAlign: "center",
    fontSize: wp(17),
    fontWeight: "400",
    color: Colors.white,
  },

});
