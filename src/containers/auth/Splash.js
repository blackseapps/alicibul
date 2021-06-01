import React, { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import * as Images from "../../assets/images";

const Splash = (props) => {

  useEffect(() => {
    setTimeout(() => {
      if (false) {
        props.navigation.replace("Home");
      } else {
        props.navigation.replace("Auth");
      }
    }, 500);
  }, []);


  return (
    <View style={styles.container}>
      <Image source={Images.imagesLoginLogoWhite} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Primary,
  },
});
