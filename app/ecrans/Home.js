import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "@composants/UI/Button";

import gereASyncStorageCRUD from "@hooks/gereASyncStorageCRUD";

import FicheTache from "@composants/FicheTache";

export default function Home({ navigation }) {
  const { listeTaches } = gereASyncStorageCRUD();
  function gereOnPress() {
    navigation.navigate("TacheAjoute");
  }

  return (
    <View style={styles.container}>
      {listeTaches.map(({ titre, description }, index) => {
        return (
          <FicheTache key={index} titre={titre} description={description} />
        );
      })}
      <Button onPress={gereOnPress}>Ajouter une tâche </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
