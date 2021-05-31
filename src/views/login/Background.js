import React from "react";
import { Image, StyleSheet } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import * as Images from "../../assets/images";

const Background = (props) => {
  return (
    <Image style={styles.imageBg} source={Images.imagesLoginBg} />
  );
};

export default Background;

const styles = StyleSheet.create({
  imageBg: {
    position: "absolute",
    width: wp(375),
    height: hp(812),
  },
});
