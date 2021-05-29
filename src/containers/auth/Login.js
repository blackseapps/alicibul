import React from "react";
import {
    View, StyleSheet, Image, Text, StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Alert
} from "react-native";
import {wp, hp} from "../../styles/Dimen"
import {Colors} from "../../styles/Colors";
import {connect, useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";


const Login = (props) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()


    return <View style={styles.container}>
        <StatusBar hidden/>

    </View>;
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
