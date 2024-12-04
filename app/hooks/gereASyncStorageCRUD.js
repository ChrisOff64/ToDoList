import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import gereAppContexte from "./gereAppContexte";

export default function gereASyncStorageCRUD() {
  const {
    state: { listeTaches },
    dispatch,
  } = gereAppContexte();

  function listeTachesChange(uneNouvelleListe) {
    dispatch({ type: "LISTE_TACHE_CHANGE", listeTaches: uneNouvelleListe });
  }

  //const [listeTaches, listeTachesChange] = React.useState([]);

  React.useEffect(() => {
    AsyncStorage.getItem("listeTaches").then((listeTachesMemorisees) => {
      if (listeTachesMemorisees) {
        let ListeTraitee = JSON.parse(listeTachesMemorisees);
        listeTachesChange(ListeTraitee);
      }
    });
  }, []);

  async function tacheAjoute(tache) {
    const nouvelleListe = [...listeTaches];
    nouvelleListe.push(tache);
    const jsonValue = JSON.stringify(nouvelleListe);
    await AsyncStorage.setItem("listeTaches", jsonValue);
    listeTachesChange(nouvelleListe);
  }

  async function tacheModifie(index, tache) {
    const nouvelleListe = [...listeTaches];
    nouvelleListe.splice(index, 1, tache);
    const jsonValue = JSON.stringify(nouvelleListe);
    await AsyncStorage.setItem("listeTaches", jsonValue);
    listeTachesChange(nouvelleListe);
  }

  async function tacheSupprime(index) {
    const nouvelleListe = [...listeTaches];
    nouvelleListe.splice(index, 1);
    const jsonValue = JSON.stringify(nouvelleListe);
    await AsyncStorage.setItem("listeTaches", jsonValue);
    listeTachesChange(nouvelleListe);
  }

  return { listeTaches, tacheAjoute, tacheModifie, tacheSupprime };
}
