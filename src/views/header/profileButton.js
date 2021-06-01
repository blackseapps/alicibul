import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import * as Images from "../../assets/images";

const ProfileButton = props => {


  const onHandle = () => {

  };

  return <View style={styles.container}>
    <TouchableOpacity onPress={onHandle}>
      <Image style={styles.images} source={Images.imagesProfileButton} />
    </TouchableOpacity>
  </View>;
};

export default ProfileButton;

const styles = StyleSheet.create({
  container: {},
  images: {
    height: hp(32),
    width: hp(32),
    marginRight: wp(23),
  },
});
