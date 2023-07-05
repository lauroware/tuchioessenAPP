import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../screens/ProductsScreen";
import IndexScreen from "../screens/IndexScreen";
import RecetasScreen from "../screens/RecetasScreen";
import TeamScreen from "../screens/TeamScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import TipsScreen from "../screens/TipsScreen";
import RecetasDetail from "../screens/RecetasDetail";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Stack.Screen name="Recetas" component={RecetasScreen} />
      <Stack.Screen name="Inicio" component={IndexScreen} />
      <Stack.Screen name="Tips" component={TipsScreen} />
      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="RecetasDetail" component={RecetasDetail} />

      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
