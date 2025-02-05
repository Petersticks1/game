import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

import Header from "../shared/header";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          // navigationOptions={({ navigation }) => ({
          //   headerTitle: () => <Header navigation={navigation} />,
          // })}
          options={{ title: "Gamezone", drawerLabel: "Home" }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          // navigationOptions={({ navigation }) => ({
          //   headerTitle: () => <Header navigation={navigation} />,
          // })}
          options={{ title: "About Gamezone", drawerLabel: "About" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
