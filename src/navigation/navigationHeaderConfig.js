import HeaderTitle from "../views/header/headerTitle";
import { hp } from "../styles/Dimen";
import React from "react";
import BackButton from "../views/header/backButton";
import HeaderHomeComponent from "../views/header/home";
import NotificationButton from "../views/header/notificationButton";


export const headerDefaultConfig = (title = "") => {
  return {
    headerTitle: props => <HeaderTitle {...props} isIcon={!title} title={title} />,
    headerTintColor: "white",
    headerTransparent: false,
    headerStyle: {
      backgroundColor: "white",
      shadowColor: "white",
    },
    headerLeft: props => <BackButton />,
    headerRight: props => <BackButton />,
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
