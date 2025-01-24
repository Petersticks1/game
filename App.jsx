import "react-native-gesture-handler";
import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home"; // Ensure this path is correct
import ReviewDetails from "./screens/reviewDetails";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading"; // Updated import
import HomeStack from "./routes/drawer";
// import HomeStack from "./routes/homeStack";
// import AboutStack from "./routes/aboutStack";
import MyDrawer from "./routes/drawer";



// To load and use custom fonts
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <MyDrawer/>;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)} // Log errors for debugging
      />
    );
  }
}
