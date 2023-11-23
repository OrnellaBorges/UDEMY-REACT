import { useState } from "react";
import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import FormContainer from "./Components/Form/FormContainer";
//import des datas js
import { CORE_CONCEPTS } from "./data.js";
import "./index.css";
import TabButton from "./Components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(
    "Please click a button to change the static content into dynamic content on this part"
  );
  //let tabContent = "Please click a button"; => avant

  // creation de la fonction handleSelect  => onSelect(event) passé dans la props du composant
  // prend en argument selectedButton qui va permettre de reconnaitre sur quel bouton on a cliqué grace a un identifiant qu'on lui passe via selectedButton
  function handleSelect(selectedButton) {
    console.log(selectedButton);
    // selectedButton => "components", "jsx", "props", "state" en string
    //tabContent = selectedButton; // ici on re affecte la valeur de tabContent par la valeur de selectedButton quand on va cliquer
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          {/*  ici in reutilise me même composant CoreConcept
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
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        <section>
          <FormContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
