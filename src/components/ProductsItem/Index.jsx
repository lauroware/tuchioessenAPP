import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://www.ollasrubi.com.ar/img/productos/novedades/linea-rosa/cacerola_24.png",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {},
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductsItem;
