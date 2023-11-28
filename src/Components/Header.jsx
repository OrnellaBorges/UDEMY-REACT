import React from "react";
//IMPORT DES IMAGES CE FAIT COMME CA :
import reactImage from "../assets/react-core-concepts.png";
//import componentsImg from "./assets/components.png";

import "./Styles/Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// 1- declaration d'une variable qui contient les 3 values

//2-fonctions qui permettent de rendre un nombre aleatoire =>
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> not
      imported
      <img src={reactImage} alt="Stylized atom" /> imported
      <h1>React Essentials</h1>
      <p className="sentence">
        {reactDescriptions[0]} My sentence without dynamic render!{" "}
        <strong>HERE WE USED AN ARRAY[0]</strong>
      </p>{" "}
      <p className="sentence">
        <strong className="dynamicWord">
          {reactDescriptions[genRandomInt(2)]}
        </strong>{" "}
        React concepts you will need for almost any app you are going to build!{" "}
        <strong>
          Here is a dynamic render of the first word of the sentence using
          genRandomInt function!
        </strong>
      </p>
    </header>
  );
}
