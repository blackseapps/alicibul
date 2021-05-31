import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { hp, wp } from "../../styles/Dimen";
import { Colors } from "../../styles/Colors";
import { dataHomeFlow } from "../../api/data";
import HomeCarItem from "../../components/views/items/homeCarItem";
import HomeCategoryItem from "../../components/views/items/homeCategoryItem";
import HomeCarGroupItem from "../../components/views/items/homeCarGroupItem";
import HomeCarInfoItem from "../../components/views/items/homeCarInfoItem";

const HomeFlowStaggeredList = (props) => {


  const renderItem = ({ item }) => {
    return (
      <>
        {
          item.groupTitle !== undefined ?
            <HomeCarGroupItem item={item} />

            : <HomeCarItem item={item} />
        }
      </>
    );
  };

  return (
    <View style={[styles.container, props.style]}>


      <FlatList
        data={dataHomeFlow}
        renderItem={renderItem}
        style={styles.list}
        numColumns={2}

        ItemSeparatorComponent={
          () => <View style={{ width: 160, backgroundColor: 'pink' }}/>
        }
        keyExtractor={item => item.id} />


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
    flexWrap:'wrap'
  },
});


