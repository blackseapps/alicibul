import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import * as Images from "../../assets/images";

const Logo = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageLogo} source={Images.imagesLoginLogoWhite} />
      <Text style={styles.title}>Hazır alıcılar, mutlu satıcılar.</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(162),
  },
  imagesLogo: {
    width: wp(185),
    height: hp(79),
  },
  title: {
    fontSize: wp(17),
    color: Colors.white,
    fontWeight: "400",
  },
});
