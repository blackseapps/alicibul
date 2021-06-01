import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { dataCategory, dataHomeFlow } from "../../api/data";
import HomeCarItem from "../../components/views/items/homeCarItem";
import HomeCategoryItem from "../../components/views/items/homeCategoryItem";

const HomeCategoryList = (props) => {


  const [selectItem, setSelectItem] = React.useState({ id: 0 });

  const onHandleChange = (item) => {
    setSelectItem(item);

  };

  const Items = ({ item }) => {
    return <HomeCategoryItem
      item={item}
      select={selectItem}
      onPress={onHandleChange}
    />;
  };

  return (
    <View style={[styles.container, props.style]}>


      <FlatList
        data={dataCategory}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={Items}
        keyExtractor={(item) => (item.id)}
        extraData={selectItem} />


    </View>
  );
};

export default HomeCategoryList;

const styles = StyleSheet.create({
  container: {
    width: wp(360),
    height: hp(45),
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


