import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  function gereOnPress() {
    navigation.navigate("ToDoCreate");
  }

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button onPress={gereOnPress} title="go" />
    </View>
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
