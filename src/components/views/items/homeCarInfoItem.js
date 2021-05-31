import React from "react";
import { StyleSheet, Modal, ActivityIndicator, View, Image, Text } from "react-native";
import { hp, wp } from "../../../styles/Dimen";
import { Colors } from "../../../styles/Colors";
import * as Images from "../../../assets/images";
import { avenirHeavy } from "../../../assets/fonts";


const HomeCarInfoItem = ({ item }) => {
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

export default HomeCarInfoItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: hp(165),
    width: wp(337),
    borderRadius: hp(7),

    marginLeft: wp(10),
    marginRight: wp(10),
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
    height: hp(145),
    borderRadius: hp(7),
  },
  opacity: {
    position: "absolute",
    backgroundColor: Colors.Primary,
    opacity: 0.5,
    height: hp(145),
    width: wp(166),
    borderRadius: hp(7),
    marginLeft: wp(1),
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

