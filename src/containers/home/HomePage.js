import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import { Colors } from "../../styles/Colors";
import { wp, hp } from "../../styles/Dimen";
import { useDispatch, useSelector } from "react-redux";
import HomeFlowStaggeredList from "../../views/home/homeFlowStaggeredList";
import HomeCategoryList from "../../views/home/homeCategoryList";
import allActions from "../../redux/actions";
import { dataHomeFlow } from "../../api/data";
import FloatingButton from "../../components/buttons/floatingButton";


const HomePage = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.loadingAction(true));
    setTimeout(() => {

      dispatch(allActions.clearAds());
      dataHomeFlow.map(item =>
        dispatch(allActions.addListAdsAction(item, 5)));

      dispatch(allActions.loadingAction(false));
    }, 1000);
  }, []);

  return (

    <View style={styles.container}>


      <HomeCategoryList style={styles.categoryList} />

      <HomeFlowStaggeredList style={styles.staggeredList} />

      <FloatingButton />

    </View>

  );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  categoryList: {
    marginTop: hp(10),
  },
  staggeredList: {
    marginTop: hp(5),
  },
});


