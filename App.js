import React from "react";
import { View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

console.disableYellowBox = true;

import Busca from "./src/pages/Busca";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fonteCarregada] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsRegular: Poppins_400Regular,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }

  return (
    <View>
      <StatusBar />
      <Busca />
    </View>
  );
}
