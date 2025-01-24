import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
        },
        headerTintColor: "#444",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        navigationOptions={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} />,
        })}
        // options={{
        //   title: "About GameZone",
        // }}
      />
    </Stack.Navigator>
  );
}
