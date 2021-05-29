import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { wp, hp } from "../../styles/Dimen";
import { useSelector } from "react-redux";

const HeaderTitle = (props) => {


  return <View style={props.isIcon ? styles.container : styles.containerDizayn}>
    {props.isIcon ?
      props.color === Colors.white ?
        null : null
      :
      <Text style={styles.text}>{props.title}</Text>
    }
  </View>;
};

export default HeaderTitle;

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
    fontFamily: "Gilroy-Bold",
    textAlign: "center",
    color: Colors.title_active,
  },
});
