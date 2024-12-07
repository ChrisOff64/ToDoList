import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Button from "@composants/UI/Button";

import gereASyncStorageCRUD from "@hooks/gereASyncStorageCRUD";

import FicheTache from "@composants/FicheTache";

import Titre from "@composants/UI/Titre";

export default function Home({ navigation }) {
  const { listeTaches, tacheModifie, tacheSupprime } = gereASyncStorageCRUD();
  function gereOnPress() {
    navigation.navigate("TacheAjoute");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Titre>Mon App Tâches</Titre>
      {listeTaches.map(({ titre, description, coche }, index) => {
        function gereDelete() {
          tacheSupprime(index);
        }
        function gereCocheChange() {
          tacheModifie(index, { titre, description, coche: !coche });
        }
        return (
          <FicheTache
            key={index}
            titre={titre}
            description={description}
            coche={coche}
            gereDelete={gereDelete}
            gereCocheChange={gereCocheChange}
          />
        );
      })}
      <Button onPress={gereOnPress}>Ajouter une tâche </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
