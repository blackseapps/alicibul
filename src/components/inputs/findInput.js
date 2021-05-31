import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import PropTypes from "prop-types";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const FindInput = (props) => {
  return (

    <View style={styles.container}>

      <AntDesign style={styles.iconFind} name={"search1"} size={wp(19)} color={Colors.findInputSearch} />

      <TextInput
        style={styles.title}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeHolder}
      />

      <TouchableOpacity style={styles.iconFilter}>
        <FontAwesome name={"filter"} size={wp(19)} color={Colors.notiButton} />
      </TouchableOpacity>
    </View>

  );
};

export default FindInput;

FindInput.defaultProps = {
  title: "text",
  icon: "",
};

FindInput.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,

};

const styles = StyleSheet.create({
  container: {
    width: wp(285),
    height: hp(42),
    borderRadius: hp(7),
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: wp(-60),

    shadowColor: "rgba(14, 21, 31, 0.06)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  iconFind: {
    marginLeft: wp(14),
  },
  iconFilter: {
    position: "absolute",
    right: wp(14),
  },
  title: {
    marginLeft: wp(10),
    fontSize: wp(14),
    fontWeight: "400",
    color: Colors.findInputSearch,
  },

});
