import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { wp, hp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import CarPropertiesCard from "../../views/sales/CarPropertiesCard";
import CountDownKm from "../../components/countDowns/countDownKm";
import CardButton from "../../components/buttons/cardButton";
import { useNavigation } from "@react-navigation/native";

const SalesMain = (props) => {

  const navigation = useNavigation();

  const redirectCarValuePreview = () => {
    navigation.navigate("SalesCarValuePreview");
  };

  return (
    <View style={styles.container}>

      <CarPropertiesCard style={styles.carCard} />

      <CountDownKm value={"55000"} unit={"KM"} style={styles.countDownKm} />

      <CardButton
        onPress={redirectCarValuePreview}
        title={"Değerini Öğren"}
        style={styles.cardButton} />

    </View>
  );
};


export default SalesMain;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  text: {
    fontSize: wp(15),
  },
  carCard: {
    marginTop: hp(18),
  },
  countDownKm: {
    marginTop: hp(15),
  },
  cardButton: {
    marginTop: hp(21),
  },
});
