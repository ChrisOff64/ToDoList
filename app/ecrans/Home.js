import React from "react";
import { StyleSheet, Text, View  } from "react-native";
import Button from "@composants/UI/Button";

export default function Home({ navigation }) {
  function gereOnPress() {
    navigation.navigate("ToDoCreate");
  }

  return (
    <View style={styles.container}>
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
