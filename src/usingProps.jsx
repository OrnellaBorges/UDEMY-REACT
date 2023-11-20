// passer des data aux composants pour qu'ils soient encore plus dynamiques

//IMPORT DES IMAGES CE FAIT COMME CA :
import reactImage from "./assets/react-core-concepts.png";
//import componentsImg from "./assets/components.png";

//import des datas js
import { CORE_CONCEPTS } from "./data.js";

import "./index.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// 1- declaration d'une variable qui contient les 3 values

//2-fonctions qui permettent de rendre un nombre aleatoire =>
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      {/* OLD ways to import image */}
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> not
      imported
      {/*  New way to add image with react librairie */}
      <img src={reactImage} alt="Stylized atom" /> imported
      <h1>React Essentials</h1>
      <p className="sentence">
        {reactDescriptions[0]} My sentence without dynamic render!{" "}
        <strong>HERE WE USED AN ARRAY[0]</strong>
      </p>{" "}
      {/* ici on aura "Fundamentale" a la place du [0]  */}
      {/* pour generer dynamiquement les Trois mots à chaque rafraichissement du composant ou de la page 
            on doit passer entre crochet la fonction qui genère des nombres aleatoire genRandomInt(2)
            => on passe 2 en argument de la fonction car c'est ce que vaut max donc la limite a ne pas depasser car nous avons 
            un tableau de 3 valeurs */}
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

//here we can create a new component CoreConcept
// il faut mettre props en argument de la function du composant

//MON COMPOSANT avec props
/* function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
} */

//MON COMPOSANT avec destructuration => plus court car on enlève props.

function CoreConcept({ img, title, description }) {
  //on met directement les atributs entre les parenthèses
  return (
    <li>
      <img src={img} alt={title} />{" "}
      {/* // on les reinjecte dans les curly braces */}
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
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
            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

/* 
More Prop Syntaxes
Beyond the various ways of setting and extracting props about which you learned in the previous lecture, there are even more ways of dealing with props.

But no worries, you'll see all these different features & syntaxes in action throughout the course!

Passing a Single Prop Object

If you got data that's already organized as a JavaScript object, you can pass that object as a single prop value instead of splitting it across multiple props.

I.e., instead of

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
or

<CoreConcept
  {...CORE_CONCEPTS[0]} />
you could also pass a single concept (or any name of your choice) prop to the CoreConcept component:

<CoreConcept
  concept={CORE_CONCEPTS[0]} />
In the CoreConcept component, you would then get that one single prop:

export default function CoreConcept({ concept }) {
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
It is entirely up to you which syntax & approach you prefer.

Grouping Received Props Into a Single Object

You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" syntax.

I.e., if a component is used like this:

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
You could group the received props into a single object like this:

export default function CoreConcept({ ...concept }) { 
  // ...concept groups multiple values into a single object
  // Use concept.title, concept.description etc.
  // Or destructure the concept object: const { title, description, image } = concept;
}
If that syntax is a bit confusing - worry not! You'll also see concrete examples for this syntax (and for why you might want to use it in certain situations) throughout the course!

Default Prop Values

Sometimes, you'll build components that may receive an optional prop. For example, a custom Button component may receive a type prop.

So the Button component should be usable either with a type being set:

<Button type="submit" caption="My Button" />
Or without it:

<Button caption="My Button" />
To make this component work, you might want to set a default value for the type prop - in case it's not passed.

This can easily be achieved since JavaScript supports default values when using object destructuring:

export default function Button({ caption, type = "submit" }) { 
  // caption has no default value, type has a default value of "submit"
} */
