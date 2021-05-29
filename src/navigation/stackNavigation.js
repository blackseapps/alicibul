import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, Header, TransitionSpecs } from "@react-navigation/stack";
import { Colors } from "../styles/Colors";
import { hp } from "../styles/Dimen";
import Splash from "../containers/auth/Splash";
import HeaderTitle from "../view/header/headerTitle";
import HomePage from "../containers/home/HomePage";
import GoBackButton from "../view/header/back";
import Login from "../containers/auth/Login";

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const headerDefaultConfig = (color = "white",
                                    title = "",
                                    isBack = false,
                                    transparent = false,
                                    iconColor = "black",
                                    priceButton,
                                    priceTitle = false) => {
  return {
    headerTitle: props => <HeaderTitle {...props} isIcon={title ? false : true}
                                       color={iconColor}
                                       priceTitle={priceTitle}
                                       title={title} />,
    headerTintColor: "white",
    headerTransparent: transparent,
    headerStyle: {
      backgroundColor: color,
      elevation: 0,
      shadowOpacity: 1,
      shadowColor: color,
      shadowRadius: 0,
      shadowOffset: {
        height: 7,
      },
      borderBottomLeftRadius: hp(10),
      borderBottomRightRadius: hp(10),
    },
    headerLeft: props => (isBack ? null : null),
    headerRight: props => (!priceButton ? null : null),
  };
};


export default function StackRoot() {

  return (
    <RootStack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false }}>

      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="Auth" component={StackAuth} />
      <RootStack.Screen name="Home" component={StackHome} />

    </RootStack.Navigator>
  );
}


export function StackAuth() {
  return (
    <AuthStack.Navigator
      initialRouteName={"Login"}
      screenOptions={{
        headerTitle: props => {
          return (<HeaderTitle {...props} isIcon={true} />);
        },
        headerTransparent: true,
        headerLeft: props => (<GoBackButton {...props} />),
      }}>


      <AuthStack.Screen name="Login" component={Login} />


    </AuthStack.Navigator>
  );
}

export function StackHome() {
  return (
    <HomeStack.Navigator initialRouteName={"HomePage"}
                         screenOptions={headerDefaultConfig(Colors.background)}>
      <HomeStack.Screen name="HomePage" component={HomePage} />
    </HomeStack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  animatedView: {
    flex: 1,
    overflow: "hidden",
  },
});
