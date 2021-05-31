import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import { Colors } from "../../styles/Colors";
import { wp, hp } from "../../styles/Dimen";
import { useDispatch, useSelector } from "react-redux";
import HomeFlowStaggeredList from "../../views/home/homeFlowStaggeredList";


const HomePage = (props) => {

  const dispatch = useDispatch();


  return (

    <View style={styles.container}>


      <HomeFlowStaggeredList style={styles.staggeredList} />

    </View>

  );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  staggeredList: {
    marginTop: hp(20),
  },
});


