import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { add_item } from "../store/actions/cart.action";

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const bread = useSelector((state) => state.products.selected);

  const handleAddItem = () => {
    dispatch(add_item(bread));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{bread.name}</Text>
      <Text style={styles.description}>{bread.description}</Text>
      <Text style={styles.price}>${bread.price}</Text>
      <Button title="Agregar al carrito" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default DetailsScreen;
