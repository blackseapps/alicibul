import HeaderTitle from "../views/header/headerTitle";
import { hp } from "../styles/Dimen";
import React from "react";
import BackButton from "../views/header/backButton";
import HeaderHomeComponent from "../views/header/home";
import NotificationButton from "../views/header/notificationButton";
import ProfileButton from "../views/header/profileButton";
import { Colors } from "../styles/Colors";


export const headerDefaultConfig = (title = "", color = Colors.white, colorTitle = Colors.findInputSearch) => {
  return {
    headerTitle: props => <HeaderTitle {...props} isIcon={!title} title={title} colorTitle={colorTitle}/>,
    headerTintColor: color,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: color,
      shadowColor: color,
    },
    headerLeft: props => <BackButton />,
    headerRight: props => <ProfileButton />,
  };
};

export const headerHomeConfig = (title = "") => {
  return {
    headerTitle: props => <HeaderHomeComponent {...props} isIcon={!title} title={title} />,
    headerTintColor: "white",
    headerTransparent: false,
    headerStyle: {
      backgroundColor: "white",
      shadowColor: "white",
    },

    headerRight: props => <NotificationButton />,
  };
};
