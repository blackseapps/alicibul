import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {hp, wp} from "../../styles/Dimen";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from '@react-navigation/native';

const GoBackButton = props => {

    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack();
    }

    return <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
            <AntDesign style={styles.icon} size={20} name={"arrowleft"}/>
        </TouchableOpacity>
    </View>
}

export default GoBackButton

const styles = StyleSheet.create({
    container: {},
    icon: {
        height: hp(24),
        width: hp(24),
        marginLeft: wp(8),
    }
})
