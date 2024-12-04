import React from "react";
import { contexteGlobal } from "../state/AppContexte";

export default function gereAppContexte() {
  const { state, dispatch } = React.useContext(contexteGlobal);
  return { state, dispatch };
}
