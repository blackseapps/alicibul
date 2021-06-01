import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { dataHomeFlow } from "../../api/data";
import HomeCarItem from "../../components/views/items/homeCarItem";
import HomeCategoryItem from "../../components/views/items/homeCategoryItem";
import HomeCarGroupItem from "../../components/views/items/homeCarGroupItem";
import HomeCarInfoItem from "../../components/views/items/homeCarInfoItem";
import { useSelector } from "react-redux";

const HomeFlowStaggeredList = (props) => {

  const { ads } = useSelector(state => state.home);

  const [selectItem, setSelectItem] = React.useState({ id: 0 });

  const onHandleChange = (item) => {
    setSelectItem(item);
  };

  const Items = ({ item }) => {
    return <HomeCarItem
      item={item}
      select={selectItem}
      onPress={onHandleChange}
    />;
  };


  const listHeaderItem = ({ item }) => {
    return (
      <HomeCarInfoItem />
    );
  };

  const renderItem = ({ item }) => {
    return (
      <>
        {
          item.groupTitle !== undefined ?
            <HomeCarGroupItem item={item} />
            : Items({ item })
        }
      </>
    );
  };

  return (
    <View style={[styles.container, props.style]}>


      <FlatList
        data={ads}
        renderItem={renderItem}
        style={styles.list}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => (item.id)}
        extraData={selectItem}
        ListHeaderComponent={listHeaderItem}
        showsVerticalScrollIndicator={false}
      />


    </View>
  );
};

export default HomeFlowStaggeredList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
    flexWrap: "wrap",
  },
});


