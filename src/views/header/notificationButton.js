import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../styles/Colors";

const NotificationButton = props => {

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={goBack}>
      <View style={styles.container}>
        <MaterialIcons color={Colors.white} size={wp(16)} name={"notifications-active"} />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationButton;

const styles = StyleSheet.create({
  container: {
    height: wp(42),
    width: wp(42),
    backgroundColor: Colors.notiButton,
    borderRadius: hp(7),
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp(19),
  },

});
