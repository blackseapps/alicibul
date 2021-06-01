import React from "react";
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { avenirHeavy } from "../../assets/fonts";
import Styled from "styled-components";
import { BlurView } from "@react-native-community/blur";
import { VerticalSeparator } from "../../components/seperators/verticalSeparator";
import { HorizontalSeparator } from "../../components/seperators/horizontalSeparator";
import CardButton from "../../components/buttons/cardButton";
import * as Images from "../../assets/images";

const SalesPreviewCard = (props) => {
  return (
    <View style={[styles.container, props.style]}>


      <BlurWrapper
        style={styles.blur}
        blurAmount={25}
        blurType="regular"
        reducedTransparencyFallbackColor="white" />


      <View style={styles.content}>
        <Text style={styles.title}>Jeep</Text>

        <HorizontalSeparator style={styles.separatorTitle} />

        <Image style={styles.image} source={Images.imagesDetailCar} />

        <Text style={styles.subTitle}>Renegade</Text>

        <Text style={styles.description}>Jeep Renegade 1.6 Multijet Limited
          2019 - Otomatik - 55.000 KM</Text>

        <Text style={styles.priceAround}>263.150 - 270.100 TL</Text>

        <HorizontalSeparator style={[styles.separatorTitle,{backgroundColor: Colors.notiButton}]} />

        <CardButton style={styles.button} title={"Ücretsiz İlan Ver"} />
      </View>

    </View>
  );
};

export default SalesPreviewCard;

const styles = StyleSheet.create({
  container: {
    width: wp(327),
    height: hp(602),
    borderRadius: hp(16),
    alignItems: "center",


  },
  content: {
    alignItems: "center",
  },

  title: {
    fontSize: wp(90),
    color: Colors.white,
    fontFamily: avenirHeavy,
    fontWeight: "700",
    textAlign: "center",
    marginTop: hp(28),
  },
  subTitle: {
    fontSize: wp(21),
    color: Colors.findInputSearch,
    fontFamily: avenirHeavy,
    fontWeight: "800",
    textAlign: "center",
    marginTop: hp(19),
  },
  description: {
    fontSize: wp(16),
    color: Colors.findInputSearch,
    fontWeight: "400",
    textAlign: "center",
    width: wp(262),
    lineHeight: hp(23),
  },
  priceAround: {
    fontSize: wp(27),
    color: Colors.Primary,
    fontWeight: "800",
    textAlign: "center",
  },
  image: {
    marginTop: hp(40),
  },
  button: {
    marginTop: hp(23),
  },
  separatorTitle: {
    backgroundColor: Colors.Primary,
    width: wp(202),
    height: hp(0.6),
    marginTop: hp(5),
  },
  blur: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: hp(16),
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


const BlurWrapper = Styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
