import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { wp, hp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import SalesPreviewCard from "../../views/salesPreview/SalesPreviewCard";

const SalesCarValuePreview = (props) => {

  return (
    <View style={styles.container}>

      <View style={styles.header} />

      <SalesPreviewCard style={styles.salesPreviewCard} />

    </View>
  );
};


export default SalesCarValuePreview;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  text: {
    fontSize: wp(15),
  },
  header: {
    width: "100%",
    height: hp(100),
    backgroundColor: Colors.Primary,
  },
  salesPreviewCard: {
    marginTop: wp(-65),
  },
});
