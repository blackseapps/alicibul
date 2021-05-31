import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../styles/Colors";
import { wp, hp } from "../../../styles/Dimen";
import { useSelector } from "react-redux";
import FindInput from "../../../components/inputs/findInput";
import { avenirHeavy } from "../../../assets/fonts";

const HeaderHomeComponent = (props) => {

  return (
    <View style={props.isIcon ? styles.container : styles.containerDizayn}>

      <FindInput placeHolder={'Arama'} />
    </View>
  );
};

export default HeaderHomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerDizayn: {},
  text: {
    fontSize: wp(20),
    fontWeight: "600",
    fontFamily: avenirHeavy,
    textAlign: "center",
    color: Colors.black,
  },
});
