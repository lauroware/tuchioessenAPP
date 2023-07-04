import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Tu Chico Essen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#333",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
