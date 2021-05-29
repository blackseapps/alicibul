import React, {useEffect, useState} from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import {Colors} from "../../styles/Colors";
import {wp, hp} from "../../styles/Dimen"
import {useDispatch, useSelector} from "react-redux";



const HomePage = (props) => {

    const dispatch = useDispatch();


    return <View style={styles.container}>


    </View>
};

export default HomePage


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: "center",
    },
});


