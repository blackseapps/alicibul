import React from "react";
import { StyleSheet, Modal, ActivityIndicator, View, Image, Text } from "react-native";
import { hp, wp } from "../../../styles/Dimen";
import { Colors } from "../../../styles/Colors";
import * as Images from "../../../assets/images";
import { avenirHeavy } from "../../../assets/fonts";


const HomeCarGroupItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={item.groupImage} />

      <View style={styles.opacity} />


      <View style={styles.content}>
        <Text style={styles.title}>{item.groupTitle}</Text>
        <Text style={styles.subTitle}>{item.groupCategoryTitle}</Text>
      </View>
    </View>
  );
};

export default HomeCarGroupItem;

const styles = StyleSheet.create({
  container: {

    backgroundColor: Colors.black,
    height: hp(145),


    borderRadius: hp(7),


    shadowColor: "rgba(14, 21, 31, 0.06)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  images: {
    resizeMode: "contain",
    width: wp(160),

    borderRadius: wp(7),
  },
  opacity: {
    position: "absolute",
    backgroundColor: Colors.Primary,
    opacity: 0.5,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: hp(2),
    borderRadius: hp(7),

  },
  content: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    bottom: 10,
    right: 10,
  },
  title: {
    fontSize: wp(16),
    fontWeight: "900",
    fontFamily: avenirHeavy,
    color: Colors.white,
  },
  subTitle: {
    fontSize: wp(16),
    fontWeight: "400",
    color: Colors.white,
  },
});

