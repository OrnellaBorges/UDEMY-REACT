// EVENTS

export default function TabButton({ children, onSelect }) {
  // 2-au dessus du return on declare la function du Onclick

  /*  function handleClick() {
    console.log("coucou"); // pour savoir si n est bien dedans il faut verifier dans la console
    // dans ce cas le but de cette function est de mettre a jour l'affichage le contenu du texte en dessous au clique 
  } */

  return (
    <li>
      <button onClick={onSelect}>{children}</button>{" "}
      {/* 1 on ajoute un ecouteur d'evenement qui prend en valeur obligatoirement une function  */}
    </li>
  );
}
