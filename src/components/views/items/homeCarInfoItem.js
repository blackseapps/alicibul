import React from "react";
import { StyleSheet, Modal, ActivityIndicator, View, Image, Text } from "react-native";
import { hp, wp } from "../../../styles/Dimen";
import { Colors } from "../../../styles/Colors";
import * as Images from "../../../assets/images";
import { avenirHeavy } from "../../../assets/fonts";


const HomeCarInfoItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageMask} source={Images.imagesHomeListMask} />
      <Image style={styles.images} source={Images.imagesHomeImageZero} />


      <View style={styles.content}>
        <Text style={styles.title}>Stüdyo özelliği ile</Text>
        <Text style={styles.subTitle}>aracınızı en iyi şekilde sergileyin.</Text>
      </View>
    </View>
  );
};

export default HomeCarInfoItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.notiButton,
    height: hp(165),
    width: wp(337),
    borderRadius: hp(7),
    marginBottom: wp(20),

    shadowColor: "rgba(14, 21, 31, 0.06)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  images: {
    resizeMode: "center",
    width: "100%",
    marginTop: hp(30),
    height: hp(145),
    borderRadius: hp(7),
  },
  imageMask: {
    position: "absolute",
    height: hp(195),
    width: wp(377),
    marginLeft: wp(-20),
  },

  content: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  title: {
    fontSize: wp(15),
    fontWeight: "400",
    color: Colors.findInputSearch,
  },
  subTitle: {
    width: wp(172),
    fontSize: wp(15),
    fontWeight: "900",
    fontFamily: avenirHeavy,
    color: Colors.findInputSearch,
  },
});

