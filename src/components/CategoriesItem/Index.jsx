import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.itemContainer, item.cardStyles]}
        onPress={() => onSelected(item)}
      >
        <View style={[styles.imageContainer, { backgroundColor: "orange" }]}>
          <Image
            style={[styles.image, item.imageSize]}
            resizeMode="cover"
            source={item.img}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { fontSize: 18, color: "black" }]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  imageContainer: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
});

export default CategoriesItem;
