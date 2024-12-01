import React from "react";

export default function gereNouvelleTache() {
  const [titre, titreChange] = React.useState("");
  const [description, descriptionChange] = React.useState("");

  const tabChamps = [
    {
      value: titre,
      onChange: (e) => titreChange(e),
      placeholder: "Nom de la tâche",
    },
    {
      value: description,
      onChange: (e) => descriptionChange(e),
      placeholder: "Description (optionnal)",
    },
  ];

  async function gereValidation() {
    if (titre.length === 0) {
      return alert("Le titre est obligatoire");
    }
  }

  return { tabChamps, gereValidation };
}
