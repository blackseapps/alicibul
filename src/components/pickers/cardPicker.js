import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import RNPickerSelect from "react-native-picker-select";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { avenirHeavy, avenirRegular } from "../../assets/fonts";

const CardPicker = (props) => {

  const placeholder = {
    label: props.placeHolder,
    value: null,
    color: Colors.findInputSearch,
  };

  return (
    <View style={[styles.container, props.style]}>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value, index) => {
          props.onValueChange(index, value);
        }}
        items={props.data}
        value={props.value}
        useNativeAndroidPickerStyle={false}
      />

      <SimpleLineIcons
        style={styles.arrow}
        color={Colors.findInputSearch}
        name={"arrow-down"} />

    </View>
  );
};

export default CardPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  arrow: {
    position: "absolute",
    right: wp(40),
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: wp(300),
    fontSize: wp(17),
    color: Colors.findInputSearch,
    fontFamily: avenirHeavy,
    fontWeight: "900",
  },
  inputAndroid: {
    width: wp(300),
    marginTop: hp(5),
    fontSize: wp(17),
    fontFamily: avenirHeavy,
    fontWeight: "900",
    color: Colors.findInputSearch,
  },
});
