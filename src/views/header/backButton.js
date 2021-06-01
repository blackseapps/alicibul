import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../styles/Colors";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const BackButton = props => {

  const navigation = useNavigation();

  const onHandle = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onHandle}>
      <SimpleLineIcons style={styles.icon} color={Colors.white} size={wp(14)} name={"arrow-left"} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.notiButton,
    height: hp(32),
    width: hp(32),
    marginLeft: wp(23),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(7),
  },
  icon: {},
});
