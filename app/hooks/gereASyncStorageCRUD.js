import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function gereASyncStorageCRUD() {
  const [listeTaches, listeTachesChange] = React.useState([]);

  React.useEffect(() => {
    AsyncStorage.getItem("listeTaches").then((listeTachesMemorisees) => {
      if (listeTachesMemorisees) {
        let ListeTraitee = JSON.parse(listeTachesMemorisees);
        listeTachesChange(listeTachesMemorisees);
      }
    });
  }, []);

  async function tacheAjoute(tache) {
    const nouvelleListe = [...listeTaches];
    nouvelleListe.push(tache);
    const jsonValue = JSON.stringify(nouvelleListe);
    await AsyncStorage.setItem("listeTaches", jsonValue);
  }

  async function tacheModifie(index, tache) {
    const nouvelleListe = [...listeTaches];
    nouvelleListe.splice(index, 1, tache);
    const jsonValue = JSON.stringify(nouvelleListe);
    await AsyncStorage.setItem("listeTaches", jsonValue);
  }

  async function tacheSupprime(index) {
    const nouvelleListe = [...listeTaches];
    nouvelleListe.splice(index, 1);
    const jsonValue = JSON.stringify(nouvelleListe);
    await AsyncStorage.setItem("listeTaches", jsonValue);
  }

  return { listeTaches, tacheAjoute, tacheModifie, tacheSupprime };
}
