import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    height: "40%",
  },
});

export default styles;
