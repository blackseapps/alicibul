import React from "react";
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { avenirHeavy } from "../../assets/fonts";

const ContractDescription = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.textNormal}>Kaydolarak veya giriş yaparak

        <TouchableWithoutFeedback onPress={props.onPressContract}>
          <Text style={styles.textBold}> Şartlar ve Koşullar </Text>
        </TouchableWithoutFeedback>
        ve
        <TouchableWithoutFeedback onPress={props.onPressPrivacy}>
          <Text style={styles.textBold}> Gizlilik Politikasını </Text>
        </TouchableWithoutFeedback>

        kabul etmiş olursunuz.</Text>
    </View>
  );
};

export default ContractDescription;

const styles = StyleSheet.create({
  container: {
    width: wp(255),
    height: hp(84),
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
    fontSize: wp(14),
    color: Colors.Primary,
    fontFamily: avenirHeavy,
    lineHeight: hp(17),
    fontWeight: "700",
    textAlign: "center",
  },
});
