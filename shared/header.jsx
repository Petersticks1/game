import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={openMenu}
      />{" "}
    
      <Text style={styles.headerText}>GameZone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red", // Adjust this color as needed
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,

    letterSpacing: 1,
    marginLeft: 10, // Add spacing between the icon and the text
  },
  icon: {
    position: "absolute",
    left: 10, // Align the icon to the left
  },
});
