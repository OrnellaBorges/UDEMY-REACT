//IMPORT DES IMAGES CE FAIT COMME CA :
import reactImage from "./assets/react-core-concepts.png";

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

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"></section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
