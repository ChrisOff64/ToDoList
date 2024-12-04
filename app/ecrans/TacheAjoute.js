import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "@composants/UI/Input";
import Button from "@composants/UI/Button";

import gereNouvelleTache from "@hooks/gereNouvelleTache";

export default function TacheAjoute({ navigation }) {
  const { tabChamps, gereValidation } = gereNouvelleTache();
  function gereOnPress() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      {tabChamps.map(({ value, onChange, placeholder }) => {
        return (
          <Input
            key={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        );
      })}

      <Button onPress={gereValidation}>Ajouter une tache</Button>
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
    backgroundColor: "rgba(0,0,0,0.05)",
  },
});
