import React from "react";
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { avenirHeavy } from "../../assets/fonts";
import SalesPropertiesItem from "../../components/views/items/salesPropertiesItem";
import { dataSalesProperties } from "../../api/data";

const CarPropertiesCard = (props) => {
  return (
    <View style={[styles.container, props.style]}>

      <FlatList
        style={styles.list}
        data={dataSalesProperties}
        renderItem={SalesPropertiesItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CarPropertiesCard;

const styles = StyleSheet.create({
  container: {
    width: wp(331),
    height: hp(467),
    borderRadius: hp(16),
    backgroundColor: Colors.notiButton,

  },
  textNormal: {
    fontSize: wp(14),
    color: Colors.white,
    lineHeight: hp(17),
    opacity: 0.8,
    fontWeight: "400",
    textAlign: "center",
  },
  textBold: {
    fontSize: wp(12),
    color: Colors.Primary,
    fontFamily: avenirHeavy,

    fontWeight: "700",
    textAlign: "center",
  },
  list: {
    flexGrow: 1,
    flexWrap:'wrap'
  },
});
