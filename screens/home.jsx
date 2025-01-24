import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import Card from "../shared/card";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ReviewForm from "./reviewForm";

export default function home({ navigation }) {
  // const pressHandler = () => {
  //   //navigation.navigate("ReviewDetails");
  //   navigation.push("ReviewDetails"); //another method
  // };

  //To use modal//
  const [modalOpen, setModalOpen] = useState(false);

  //To use the review form//
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Not So 'Final' Fantasy",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  return (
    <ImageBackground
      source={require("../assets/5676719.jpg")}
      style={globalStyles.container}
    >
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title="go to review details" onPress={pressHandler} /> */}

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }} //Adding more that one style
            />
            {/* <Text>Hello from the modal:</Text> This is where the form is rendered */}

            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            {/* <Text style={globalStyles.titleText}>{item.title}</Text> */}
            {/* //For the card */}
            <Card>
              <View style={globalStyles.cardContainer}>
                <Image
                  source={require("../assets/rating-1.png")}
                  style={globalStyles.headerImage}
                />
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
