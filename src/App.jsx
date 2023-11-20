import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import FormContainer from "./Components/form/FormContainer";
//import des datas js
import { CORE_CONCEPTS } from "./data.js";
import "./index.css";
import TabButton from "./Components/TabButton";

function App() {
  // creation de la fonction handleSelect  => onSelect(event) passé dans la props du composant
  function handleSelect() {
    console.log("hello world => selected");
  }
  /* 
  console.log("image1", CORE_CONCEPTS[0].image);
  console.log("first", { ...CORE_CONCEPTS[1] }); */

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
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          Dynamic Content will be here
        </section>
        <section>
          <FormContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
