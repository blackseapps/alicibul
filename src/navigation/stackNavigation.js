import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../containers/auth/Splash";
import HeaderTitle from "../views/header/headerTitle";
import HomePage from "../containers/home/HomePage";
import Login from "../containers/auth/Login";
import BottomNavigation from "./bottomNavigation";
import ProfileMain from "../containers/profile/ProfileMain";
import MessageMain from "../containers/messages/MessageMain";
import SalesMain from "../containers/sales/SalesMain";
import CarFind from "../containers/find/CarFind";
import { headerDefaultConfig, headerHomeConfig } from "./navigationHeaderConfig";
import BackButton from "../views/header/backButton";
import ProfileButton from "../views/header/profileButton";
import SalesCarValuePreview from "../containers/sales/SalesCarValuePreview";
import { Colors } from "../styles/Colors";

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CarFindStack = createStackNavigator();
const SalesStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ProfileStack = createStackNavigator();


export default function StackRoot() {

  return (
    <RootStack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false }}>

      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="Auth" component={StackAuth} />
      <RootStack.Screen name="BottomNavigation" component={BottomNavigation} />

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
        headerLeft: props => (<BackButton {...props} />),
      }}>


      <AuthStack.Screen name="Login" component={Login} />


    </AuthStack.Navigator>
  );
}

export function StackHome() {
  return (
    <HomeStack.Navigator initialRouteName={"HomePage"}
                         screenOptions={headerHomeConfig("")}>
      <HomeStack.Screen
        name="HomePage"
        component={HomePage} />
    </HomeStack.Navigator>
  );
}

export function StackCarFind() {
  return (
    <CarFindStack.Navigator initialRouteName={"CarFind"}
                            screenOptions={headerDefaultConfig("CarFind")}>
      <CarFindStack.Screen
        name="CarFind"
        component={CarFind} />
    </CarFindStack.Navigator>
  );
}

export function StackSales() {
  return (
    <SalesStack.Navigator initialRouteName={"Sales"}
                          screenOptions={headerDefaultConfig("Değerini Öğren")}>
      <SalesStack.Screen
        name="Sales"
        component={SalesMain} />

      <SalesStack.Screen
        name="SalesCarValuePreview"
        component={SalesCarValuePreview}
        options={headerDefaultConfig("Değerini Öğren", Colors.Primary, Colors.white)}
      />

    </SalesStack.Navigator>
  );
}

export function StackMessages() {
  return (
    <MessagesStack.Navigator initialRouteName={"Messages"}
                             screenOptions={headerDefaultConfig("Messages")}>
      <MessagesStack.Screen
        name="Messages"
        component={MessageMain} />
    </MessagesStack.Navigator>
  );
}

export function StackProfile() {
  return (
    <ProfileStack.Navigator initialRouteName={"Profile"}
                            screenOptions={headerDefaultConfig("Profile")}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileMain} />
    </ProfileStack.Navigator>
  );
}


const profileButton = () => {
  return (
    <ProfileButton />
  );
};

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
