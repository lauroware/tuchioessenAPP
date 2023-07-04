import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const IndexScreen = ({ navigation }) => {
  const navigateToBread = () => {
    navigation.navigate("Recetas");
  };

  const openWhatsApp = () => {
    Linking.openURL("https://api.whatsapp.com/send?phone=00541162366175");
  };

  const navigateToProducts = () => {
    navigation.navigate("Categories");
  };

  const navigateToTeam = () => {
    navigation.navigate("Team");
  };

  const navigateToTips = () => {
    navigation.navigate("Tips");
  };

  return (
    <View style={styles.container}>
      <View style={styles.presentationContainer}>
        <Image
          style={styles.presentationImage}
          source={require("../assets/imageninicio.jpg")}
        />
      </View>

      <View style={styles.topImagesContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={navigateToProducts}
        >
          <Image
            style={styles.image}
            source={require("../assets/logoessen.bmp")}
          />
          <Text style={styles.imageText}>Productos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={navigateToBread}
        >
          <Image style={styles.image} source={require("../assets/foto2.jpg")} />
          <Text style={styles.imageText}>Recetas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomImagesContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={navigateToTips}
        >
          <Image style={styles.image} source={require("../assets/tips.jpg")} />
          <Text style={styles.imageText}>Lista de supermercado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={navigateToTeam}
        >
          <Image
            style={styles.image}
            source={require("../assets/emprendeconmigo.jpeg")}
          />
          <Text style={styles.imageText}>Mandame tu comida</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity
          style={[styles.iconContainer, { marginRight: 10 }]}
          onPress={openWhatsApp}
        >
          <Icon name="whatsapp" size={35} color="#25D366" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => Linking.openURL("https://www.instagram.com")}
        >
          <Icon name="instagram" size={35} color="#C13584" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  topImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bottomImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "48%",
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  imageText: {
    padding: 10,
    textAlign: "center",
  },
  iconContainer: {
    marginBottom: 20,
  },
  presentationContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  presentationImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
