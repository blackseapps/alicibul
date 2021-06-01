import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../../styles/Dimen";
import { Colors } from "../../../styles/Colors";


const HomeCategoryItem = ({ item, select, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.container}>

      <Image source={item.image} />

      {item.id === select.id
        ? <Text style={styles.title}>{item.title}</Text>
        : <Text style={styles.title} />}

    </TouchableOpacity>
  );
};

export default HomeCategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: wp(60),

  },
  title: {
    fontSize: wp(12),
    fontWeight: "400",
    color: Colors.Primary,
    marginTop: hp(3),
  },
});

