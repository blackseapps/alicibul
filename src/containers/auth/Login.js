import React from "react";
import {
  View, StyleSheet, Image, Text, StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Alert,
} from "react-native";
import { wp, hp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as Images from "../../assets/images";
import Background from "../../views/login/Background";
import Logo from "../../views/login/Logo";
import RegisterButtons from "../../views/login/RegisterButtons";
import { ScreenSeparator } from "../../components/seperators/screenSeparator";
import SignInButton from "../../views/login/SignInButton";
import ContractDescription from "../../views/login/ContractDescription";


const Login = (props) => {

  const navigation = useNavigation();
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <Background />

      <Logo />

      <RegisterButtons style={styles.loginButtons} />

      <ScreenSeparator style={styles.screenSeparator} />

      <SignInButton style={styles.signInButton} />

      <ContractDescription style={styles.contractDescription} />
    </View>
  );
};


export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    alignItems: "center",
  },
  loginButtons: {
    marginTop: hp(125),
  },
  screenSeparator: {
    marginTop: hp(21),
  },
  signInButton: {
    marginTop: hp(21),
  },
  contractDescription: {
    marginTop: hp(16),
  },
});
