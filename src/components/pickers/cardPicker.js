import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {hp, wp} from "../../styles/Dimen";
import {Colors} from "../../styles/Colors";
import RNPickerSelect from "react-native-picker-select";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { avenirHeavy, avenirRegular } from "../../assets/fonts";

const CardPicker = (props) => {

    const placeholder = {
        label: props.placeHolder,
        value: null,
        color: '#9EA0A4',
    };

    return (
            <View style={styles.container}>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    onValueChange={(value, index) => {
                        props.onValueChange(index, value)
                    }}
                    placeholder={placeholder}
                    items={props.data}
                    value={props.value}

                    useNativeAndroidPickerStyle={false}

                />
                <SimpleLineIcons style={{position: "absolute", right: wp(10)}} color={Colors.findInputSearch}
                                 name={"arrow-down"}/>
            </View>

    )
}

export default CardPicker

const styles = StyleSheet.create({
    container: {
        width: wp(340),
        height: hp(46),
        alignItems: "center",
        marginLeft: wp(10),
        marginRight: wp(10),
    },

})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: wp(280),
        marginTop: hp(12),
        fontSize: wp(17),
        color: Colors.findInputSearch,
        fontFamily: avenirRegular,
        lineHeight: hp(16),
    },
    inputAndroid: {
        width: wp(260),
        marginTop: hp(5),
        fontSize: wp(17),
        color: Colors.findInputSearch,
        lineHeight: hp(16),
    },
});
