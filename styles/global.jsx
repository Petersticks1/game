import { StyleSheet, Text, View } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontSize: 18,
    color: "#333",
    fontFamily: "nunito-bold",
  },

  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  headerImage: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  cardContainer: {
    flexDirection: "row",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
}); 

export const ratingImages = {
  1: require("../assets/rating-1.png"),
  2: require("../assets/rating-2.png"),
  3: require("../assets/rating-1.png"),
  4: require("../assets/rating-2.png"),
  5: require("../assets/rating-1.png"),
};
