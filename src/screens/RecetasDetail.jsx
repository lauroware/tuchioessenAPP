import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const RecetasDetail = ({ route }) => {
  const { title, ingredientes, receta } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.title}>Detalles de la receta: {title}</Text>
          <Text style={styles.label}>Ingredientes:</Text>
          <Text style={styles.text}>{ingredientes}</Text>
          <Text style={styles.label}>Receta:</Text>
          <Text style={styles.text}>{receta}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default RecetasDetail;
