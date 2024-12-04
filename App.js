import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "@navigation/Navigation";
import { AppStateFournisseur } from "./app/state/AppContexte";

export default function App() {
  return (
    <AppStateFournisseur>
      <Navigation />
    </AppStateFournisseur>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
