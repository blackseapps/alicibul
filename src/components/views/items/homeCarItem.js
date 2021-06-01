import React from "react";
import { StyleSheet, Modal, TouchableOpacity, View, Text, Image } from "react-native";
import { hp, wp } from "../../../styles/Dimen";
import { Colors } from "../../../styles/Colors";
import * as Images from "../../../assets/images";
import { avenirHeavy } from "../../../assets/fonts";
import * as Icons from "../../../assets/icons";
import Styled from "styled-components";
import { BlurView } from "@react-native-community/blur";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeCarItem = ({ item, select, onPress }) => {


  const [like, setLike] = React.useState(false);

  const onHandleLike = () => {
    setLike(!like);
  };

  return (
    <View style={styles.container}>

      <View>
        <Image style={styles.images} source={item.image} />


        <TouchableOpacity style={[styles.selectItemIcon]} onPress={onHandleLike}>
          {like
            ? <Ionicons size={24} color={Colors.price} name={"heart"} />
            : <Ionicons size={24} color={Colors.white} name={"heart"} />}
        </TouchableOpacity>


        <View style={styles.carLogoContent}>
          <BlurWrapper
            style={styles.carLogoContent}
            blurAmount={0.9}
            blurType="light"
            reducedTransparencyFallbackColor="white" />

          <Image style={styles.logo} source={Images.imagesAudiLogo} />
        </View>
      </View>


      <View style={styles.content}>
        <View style={styles.subContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>

        <View style={styles.subContent}>
          <View style={styles.iconContent}>
            <Image source={Icons.iconPath} />
            <Text style={styles.subContentText}>{item.km}</Text>
          </View>

          <View style={styles.iconContent}>
            <Image source={Icons.iconLocation} />
            <Text style={styles.subContentText}>{item.location}</Text>
          </View>
        </View>

        <View style={styles.subContent}>
          <View style={styles.iconContent}>
            <Image source={Icons.iconGear} />
            <Text style={styles.subContentText}>{item.gearTypes}</Text>
          </View>
          <View style={styles.iconContent}>
            <Image source={Icons.iconFuel} />
            <Text style={styles.subContentText}>{item.fuelTypes}</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

export default HomeCarItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: hp(210),
    width: wp(160),
    borderRadius: hp(7),


    marginBottom: wp(20),

    shadowColor: "rgba(14, 21, 31, 0.06)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  carLogoContent: {
    height: wp(36),
    width: wp(36),
    position: "absolute",
    bottom: hp(5),
    left: wp(5),
    borderRadius: hp(8),
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    marginLeft: wp(9),
    marginRight: wp(9),
    marginTop: wp(5),
  },
  subContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContent: {
    alignItems: "center",
    flexDirection: "row",
  },
  images: {
    resizeMode: "cover",
    width: wp(160),
    height: hp(145),
    borderRadius: hp(7),
  },
  logo: {
    resizeMode: "contain",
    height: wp(30),
    width: wp(30),
    marginLeft: wp(8),
  },
  title: {
    fontSize: wp(14),
    fontWeight: "800",
    fontFamily: avenirHeavy,
    color: Colors.findInputSearch,
  },
  price: {
    fontSize: wp(14),
    fontWeight: "800",
    fontFamily: avenirHeavy,
    color: Colors.price,
  },
  subContentText: {
    fontSize: wp(13),
    fontWeight: "400",
    color: Colors.subContentText,
    marginLeft: wp(5),
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  selectItemIcon: {
    position: "absolute",
    top: hp(10),
    right: wp(10),
    opacity: 0.8,
  },
});

const BlurWrapper = Styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
