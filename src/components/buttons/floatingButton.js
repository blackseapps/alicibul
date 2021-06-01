import React from "react";
import { Image, StyleSheet, View, Platform, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import PropTypes from "prop-types";
import Draggable from "react-native-draggable/Draggable";
import Feather from "react-native-vector-icons/Feather";
import * as Images from "../../assets/images";

const FloatingButton = (props) => {
  return (
    <>
      {
        Platform.OS === "ios" ?
          <Draggable
            x={wp(props.x)}
            y={hp(props.y)}

            minX={wp(20)}
            minY={hp(50)}
            maxX={wp(290)}
            maxY={hp(550)}>
            <View style={styles.content}>
              <TouchableOpacity onPress={props.onPress}>
                <Image source={Images.imagesGift} />
              </TouchableOpacity>
            </View>
          </Draggable>
          :
          <View style={[styles.content, { top: 290, left: 50 }]}>
            <TouchableOpacity onPress={props.onPress}>
              <Feather size={hp(30)} name={"more-horizontal"} color={Colors.white} />
            </TouchableOpacity>
          </View>
      }
    </>
  );
};

export default FloatingButton;

FloatingButton.defaultProps = {
  title: "text",
  icon: "",
  x: 290,
  y: 50,
};

FloatingButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,

};

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.white,
    width: wp(85),
    height: hp(85),
    borderRadius: hp(40),
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "rgba(14, 21, 31, 0.06)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    textAlign: "center",
    fontSize: wp(17),
    fontWeight: "400",
    color: Colors.white,
  },

});
