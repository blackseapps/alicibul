/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import { StatusBar, YellowBox } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import Route from "./src/Route";
import { navigationRef } from "./src/navigation/RootNavigation";
import { persistor, store } from "./src/redux/store";


YellowBox.ignoreWarnings([
  "Sending \`onAnimatedValueUpdate\` with no listeners registered.",
]);


const App = () => {

  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
          <Route />
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
};

export default App;
