import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { StackCarFind, StackHome, StackMessages, StackProfile, StackSales } from "./stackNavigation";
import * as Icons from "../assets/icons";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Colors } from "../styles/Colors";
import { hp, wp } from "../styles/Dimen";

const Tabs = AnimatedTabBarNavigator();

const BottomNavigation = () => {
  return (<Tabs.Navigator
      tabBarOptions={tabBarOption()}
      appearance={appearance()}>

      <Tabs.Screen name="Home" options={{
        tabBarLabel: "Vitrin",
        activeTabBackground: Colors.Primary,
        tabBarIcon: ({ color, size }) => (
          color === Colors.black
            ? <Image source={Icons.iconBottomNCarBlack} />
            : <Image source={Icons.iconBottomNCar} />
        ),
      }} component={StackHome} />

      <Tabs.Screen name="Find" options={{
        tabBarLabel: "Bul",
        tabBarIcon: ({ color, size }) => (
          <Image source={Icons.iconBottomNCarFind} />
        ),
      }} component={StackCarFind} />

      <Tabs.Screen name="Sales" options={{
        tabBarLabel: "Sat",
        tabBarIcon: ({ color, size }) => (
          color === Colors.black
            ? <Image source={Icons.iconBottomNPhotoBlack} />
            : <Image source={Icons.iconBottomNPhoto} />
        ),
      }} component={StackSales} />

      <Tabs.Screen name="Messages" options={{
        tabBarLabel: "Mesaj",
        tabBarIcon: ({ color, size }) => (
          <Image source={Icons.iconBottomNMessage} />
        ),
      }} component={StackMessages} />

      <Tabs.Screen name="Profile" options={{
        tabBarLabel: "Profil",
        tabBarIcon: ({ color, size }) => (
          <Image source={Icons.iconBottomNProfile} />
        ),
      }} component={StackProfile} />
    </Tabs.Navigator>
  );
};


export default BottomNavigation;

const tabBarOption = () => {
  return {
    activeTintColor: Colors.white,
    inactiveTintColor: Colors.black,
    activeBackgroundColor: Colors.Primary,
    style: {
      backgroundColor: "green",
      fontSize: wp(14),
    },
    tabStyle: {
      borderRadius: hp(1),
    },
  };
};

const appearance = () => {
  return {
    dotCornerRadius: hp(9),
    topPadding: hp(10),
    shadow: true,
  };
};
