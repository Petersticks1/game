import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles, ratingImages } from "../styles/global";
import Card from "../shared/card";



export default function ReviewDetails({ route }) {
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.bodyText}>{body}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>GameZone rating:</Text>
          <Image source={ratingImages[rating]} style={styles.ratingImage} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  ratingImage: {
    width: 20, // Adjust the size as needed
    height: 20,
    resizeMode: "contain",
  },
});
