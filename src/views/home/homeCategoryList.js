import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { dataHomeFlow } from "../../api/data";
import HomeCarItem from "../../components/views/items/homeCarItem";

const HomeCategoryList = (props) => {
  return (
    <View style={styles.container}>


      <FlatList
        data={dataHomeFlow}
        renderItem={HomeCarItem} />


    </View>
  );
};

export default HomeCategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


