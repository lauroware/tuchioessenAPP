import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Index = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userId ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Index;
