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


const Login = (props) => {

  const navigation = useNavigation();
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <Background />

      <Logo />

    </View>
  );
};


export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },

});
