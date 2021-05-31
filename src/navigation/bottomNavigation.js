import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackCarFind, StackHome, StackMessages, StackProfile, StackSales } from "./stackNavigation";
import * as Icons from "../assets/icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AnimatedTabBarNavigator, TabButtonLayout } from "react-native-animated-nav-tab-bar";
import { Colors } from "../styles/Colors";

const Tab = createBottomTabNavigator();

const Tabs = AnimatedTabBarNavigator();

const BottomNavigation = () => {
  return (<Tabs.Navigator
      // default configuration from React Navigation
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: "#ff0000",

        tabStyle: {},
      }}

    >

      <Tab.Screen name="Home" options={{
        tabBarLabel: "Vitrin",

        tabBarIcon: ({ color, size }) => (

          <Image source={Icons.iconBottomNCar} />
        ),
      }}
                  component={StackHome} />
      <Tab.Screen name="Home2" options={{
        tabBarLabel: "Bul",

        tabBarIcon: ({ color, size }) => (
          <Image source={Icons.iconBottomNCar} />
        ),
      }}
                  component={StackCarFind} />

      <Tab.Screen name="Home3" options={{
        tabBarLabel: "Sat",
        tabBarIcon: ({ color, size }) => (
          <Image source={Icons.iconBottomNCar} />
        ),
      }}
                  component={StackSales} />

      <Tab.Screen name="Home4" options={{
        tabBarLabel: "Mesaj",
        tabBarIcon: ({ color, size }) => (
          <Image source={Icons.iconBottomNCar} />
        ),
      }}
                  component={StackMessages} />

      <Tab.Screen name="Home5" options={{
        tabBarLabel: "Profil",
        tabBarIcon: ({ color, size }) => (
          <Image source={Icons.iconBottomNCar} />
        ),
      }}
                  component={StackProfile} />
    </Tabs.Navigator>
  );
};


export default BottomNavigation;

const styles = StyleSheet.create({
  navigatorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#d0d0d0",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },

});
