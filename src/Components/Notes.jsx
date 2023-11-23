import React from "react";
import TabButton from "./TabButton";

const Notes = () => {
    function handleSelect(selectedButton) {
        // selectedButton => "components", "jsx", "props", "state" en string
        console.log(selectedButton);
    }
    return (
        <div>
            <TabButton onClick={handleSelect}>State</TabButton>
            <TabButton onClick={handleSelect()}>State</TabButton>
            <TabButton onClick={() => handleSelect("State")}>State</TabButton>
        </div>
    );
};

export default Notes;

/* Les trois syntaxes que vous avez fournies sont des façons différentes d'utiliser la gestion des événements en React. Elles ont des implications différentes sur le moment où la fonction handleSelect sera appelée.

<TabButton onClick={handleSelect}>State</TabButton>

Dans cette syntaxe, handleSelect sera passé en tant que référence à la fonction onClick. Cela signifie que la fonction handleSelect ne sera appelée que lorsque l'événement onClick se produira. Elle ne sera pas exécutée immédiatement lors du rendu du composant. C'est généralement la manière préférée de gérer les événements en React.

<TabButton onClick={handleSelect()}>State</TabButton>

Ici, handleSelect() est appelé immédiatement lors du rendu du composant, et le résultat de cet appel (c'est-à-dire la valeur retournée par handleSelect) est passé comme gestionnaire d'événement onClick. Cela peut causer des problèmes car cela signifie que la fonction serait appelée chaque fois que le composant est rendu, et non seulement lors de l'événement onClick. Ce n'est généralement pas souhaitable.

<TabButton onClick={() => handleSelect('xxxx')}>State</TabButton>

Cette syntaxe utilise une fonction fléchée en ligne qui, à son tour, appelle handleSelect avec l'argument 'xxxx'. Cela peut être utile si vous avez besoin de passer des arguments supplémentaires à votre gestionnaire d'événements. La fonction fléchée garantit également que handleSelect ne sera appelée qu'au moment de l'événement onClick.

En résumé, la première syntaxe est généralement la plus recommandée, à moins que vous n'ayez besoin de passer des arguments supplémentaires à votre gestionnaire d'événements, auquel cas la troisième syntaxe avec la fonction fléchée peut être utilisée. La deuxième syntaxe, qui appelle la fonction immédiatement, devrait être évitée dans la plupart des cas. */
