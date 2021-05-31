import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import * as Images from "../../assets/images";
import { Colors } from "../../styles/Colors";
import LoginButton from "../../components/buttons/LoginButton";
import * as Icon from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";

const RegisterButtons = (props) => {

  const navigation = useNavigation();


  const redirectHome = () => {
    navigation.replace("BottomNavigation");
  };

  return (
    <View style={[styles.container, props.style]}>

      <LoginButton onPress={redirectHome} icon={Icon.iconPhone} title={"Telefon ile Kayıt Olun"} />

      <LoginButton onPress={redirectHome} icon={Icon.iconMail} title={"Eposta ile Kayıt Olun"} />

      <LoginButton onPress={redirectHome} icon={Icon.iconApple} title={"Google ile Kayıt Olun"} />

      <LoginButton onPress={redirectHome} icon={Icon.iconApple} title={"Apple ile Kayıt Olun"} />

      <LoginButton onPress={redirectHome} icon={Icon.iconFacebook} title={"Facebook ile Kayıt Olun"} />

    </View>
  );
};

export default RegisterButtons;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
