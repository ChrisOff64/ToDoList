import React from "react";
import { StyleSheet, Text, View  } from "react-native";
import Button from "@composants/UI/Button";

import gereASyncStorageCRUD from "@hooks/gereASyncStorageCRUD";

export default function Home({ navigation }) {
  const {listeTaches}= gereASyncStorageCRUD(); 
  function gereOnPress() {
    navigation.navigate("ToDoCreate");
  }

  return (
    <View style={styles.container}>
      {listeTaches.map(({titre,description},index) => {
         return (
         <View key={index}>
          <Text>{titre}</Text>
          <Text>{description==="" ? "Pas de description": description}</Text>
          </View>
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
    padding:16
  },
}); 
