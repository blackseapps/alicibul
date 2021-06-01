import React from "react";
import {StyleSheet, Modal, ActivityIndicator, View} from "react-native";
import {hp, wp} from "../styles/Dimen";
import {Colors} from "../styles/Colors";
import {BlurView} from "@react-native-community/blur";
import Styled from "styled-components";

const Loading = (props) => {
    return (
        <Modal transparent={true} animated={"slide"} style={styles.container}>
            <BlurWrapper
                style={styles.absolute}
                blurType="dark"
                blurAmount={9}
                reducedTransparencyFallbackColor="white"/>

            <View style={styles.content}>
                <ActivityIndicator color={Colors.white}/>
            </View>

        </Modal>
    )
}

export default Loading

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
    }
})

const BlurWrapper = Styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
