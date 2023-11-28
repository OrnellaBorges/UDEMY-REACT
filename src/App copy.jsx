import { useState, Fragment } from "react";
import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import CoreConcept2 from "./Components/CoreConcept2";
import FormContainer from "./Components/Form/FormContainer";
import Practice4 from "./Practice4-props";
import Practice5 from "./Practice5-useStates";
import Popup from "./Components/PopUp";
import DynamicStyle from "./Components/DynamicStyling";
import DynamicList from "./Components/DynamicListContent";
import Examples from "./Components/Examples";
//import des datas js
import { CORE_CONCEPTS } from "./data.js";

import "./index.css";
function AppCopy() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          {/*  ici on reutilise me même composant CoreConcept
        et on le custom grace aux atributs par les props 
        on va chercher dans la data importé*/}
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />

            {/*  alternatives plus courtes avec un spread operator*/}
            {/* soucis les images ne s'affichent pas  */}
            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          <CoreConcept2 />
        </section>

        <Examples />

        <FormContainer />

        <section>
          <h2>Les exercices</h2>
          <Practice4 />
          <Practice5 />
          <Popup />
          <DynamicStyle />
          <DynamicList />
        </section>
      </main>
    </>
  );
}

export default AppCopy;
