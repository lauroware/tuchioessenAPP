import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";
import MainNavigator from "./src/navigation/Index";

export default function App() {
  const [isPortrait, setIsPortrait] = useState(true);

  const statePortrait = () => setIsPortrait(onPortrait);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height > dim.width;
  };

  console.log(isPortrait);

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    return () => {
      Dimensions.removeEventListener("change", statePortrait);
    };
  }, []);

  const [loaded] = useFonts({
    OpenSansBold: require("./src/assets/fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./src/assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={styles.container}>
      <Header />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  texto: {
    fontFamily: "OpenSansBold",
  },
  texto2: {
    fontFamily: "OpenSansRegular",
  },
});
