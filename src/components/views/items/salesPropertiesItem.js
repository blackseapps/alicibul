import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { hp, wp } from "../../../styles/Dimen";
import { Colors } from "../../../styles/Colors";
import { avenirHeavy } from "../../../assets/fonts";
import CardPicker from "../../pickers/cardPicker";

const SalesPropertiesItem = ({ item }) => {
  return (
    <View style={styles.container}>


      <View style={styles.content}>

        <Text style={styles.title}>{item.title}</Text>

        <CardPicker
          style={styles.picker}
          value={item.data[0].value}
          data={item.data}
          onValueChange={() => {
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
    borderBottomWidth: 0.5,
    borderColor: "rgba(58, 45, 19, 0.07)",
    marginLeft: wp(14),
    marginRight: wp(14),
    marginTop: hp(5),
  },
  content: {
    justifyContent: "center",
  },
  title: {
    fontSize: wp(17),
    fontWeight: "400",
    fontFamily: avenirHeavy,
    color: Colors.findInputSearch,
  },
  picker: {
    height: hp(25),
    width: wp(300),
  },
});

