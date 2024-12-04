import React, { createContext, useReducer } from "react";

const initialState = { listeTaches: [] };

const contexteGlobal = createContext(initialState);
const { Provider } = contexteGlobal;

function AppStateFournisseur({ children }) {
  const [state, dispatch] = useReducer((statePrecedent, action) => {
    switch (action.type) {
      case "LISTE_TACHE_CHANGE":
        return { ...statePrecedent, listeTaches: action.listeTaches };
      default:
        return statePrecedent;
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { contexteGlobal, AppStateFournisseur };
