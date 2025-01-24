import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
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
        name="Home"
        component={Home}
        options={{
          title: "GameZone",
        }}
        navigationOptions={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
}
