import React from "react";
import { StyleSheet, Modal, ActivityIndicator, View, Text, Image } from "react-native";
import { hp, wp } from "../../../styles/Dimen";
import { Colors } from "../../../styles/Colors";
import * as Images from "../../../assets/images";
import { avenirHeavy } from "../../../assets/fonts";
import * as Icons from "../../../assets/icons";
import Styled from "styled-components";
import { BlurView } from "@react-native-community/blur";
import Ionicons from "react-native-vector-icons/Ionicons";
import CardPicker from "../../pickers/cardPicker";

const SalesPropertiesItem = ({ item }) => {
  return (
    <View style={styles.container}>


      <View style={styles.content}>

        <Text>{item.title}</Text>

        <CardPicker data={item.data} value={"0"} onValueChange={() => {
        }} />
      </View>
    </View>
  );
};

export default SalesPropertiesItem;

const styles = StyleSheet.create({
  container: {
    height: hp(48),
    width: wp(301),
    borderBottomWidth: wp(1),
    borderColor: Colors.notiButton,
  },
  content: {
    justifyContent: "center",
    marginLeft: wp(9),
    marginRight: wp(9),
    marginTop: wp(5),
  },

  title: {
    fontSize: wp(14),
    fontWeight: "800",
    fontFamily: avenirHeavy,
    color: Colors.findInputSearch,
  },
  price: {
    fontSize: wp(14),
    fontWeight: "800",
    fontFamily: avenirHeavy,
    color: Colors.price,
  },
  subContentText: {
    fontSize: wp(13),
    fontWeight: "400",
    color: Colors.subContentText,
    marginLeft: wp(5),
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  selectItemIcon: {
    position: "absolute",
    top: hp(10),
    right: wp(10),
    opacity: 0.5,
  },
});

const BlurWrapper = Styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
