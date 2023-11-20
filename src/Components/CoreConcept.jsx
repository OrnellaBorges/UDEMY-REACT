import React from "react";
import "./CoreConcept.css";

//MON COMPOSANT avec destructuration => plus court

export default function CoreConcept({ img, title, description }) {
  /*   console.log("img", img); */
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
