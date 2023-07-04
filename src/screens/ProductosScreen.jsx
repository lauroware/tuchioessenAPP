import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const ProductosScreen = ({ navigation }) => {
  const handlePress = () => {
    // Navegar a otra pantalla
    navigation.navigate("DetallesProducto");
  };

  const data = [
    {
      id: "1",
      title: "Línea contemporanea",
      description: "Linea Contemoranea",
    },
    { id: "2", title: "Línea Nuit", description: "Línea Nuit" },
    { id: "3", title: "Especiales Essen", description: "Especiales Essen" },
    { id: "4", title: "Complementos", description: "Complementos" },
    { id: "5", title: "Bazar Premium", description: "Bazar Premium" },
  ];

  const Card = ({ title, description }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.title}>Líneas Essen!</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card title={item.title} description={item.description} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardsContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 200,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
  },
});

export default ProductosScreen;
