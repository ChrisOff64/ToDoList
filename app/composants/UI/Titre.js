import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Titre({ children }) {
  return (
      <Text style={styles.title}>{children}</Text>
  );
}

const styles = StyleSheet.create({

  title: {  marginBottom: 42, fontSize: 32, fontWeight: "600" },
});
