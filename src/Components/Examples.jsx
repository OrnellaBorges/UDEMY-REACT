import TabButton from "./TabButton";
import Tabs from "../Components/Tabs";
import Section from "../Components/Section";

import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function Examples({ title }) {
    const [selectedTopic, setSelectedTopic] = useState(null);
    /* const [active, setIsActive] = useState("active"); */
    //let tabContent = "Please click a button"; //=> avant lorsque tu cliques sur les boutons tu met a jour tu auras sois "components", "jsx", "props", "states"

    // creation de la fonction handleSelect  => onSelect(event) passé dans la props du composant
    // prend en argument selectedButton qui va permettre de reconnaitre sur quel bouton on a cliqué grace a un identifiant qu'on lui passe via selectedButton
    function handleSelect(selectedButton) {
        //console.log(selectedButton);
        // selectedButton => "components", "jsx", "props", "state" en string
        //tabContent = selectedButton; // ici on re affecte la valeur de tabContent par la valeur de selectedButton quand on va cliquer
        setSelectedTopic(selectedButton);
        //console.log(selectedTopic);
    }
    //1-declarer une variable avec du code dedans
    let jsxCode = <p>Please select a topic</p>; // je stock danqs la variable un bout de code Html

    //2- faire une condition if qui affiche en fonction si s'est truthy ou falsy
    if (selectedTopic) {
        jsxCode = (
            <div>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onSelect={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onSelect={() => handleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onSelect={() => handleSelect("state")}
                        >
                            State
                        </TabButton>{" "}
                    </>
                }
            >
                {jsxCode}
            </Tabs>
            <menu>{/*  // isSelected renvoie true ou false  */}</menu>
            {selectedTopic}
            <section id="tab-content">
                <h2>Affichage conditionnel : soluce 1 deux ternaires</h2>
                {/* si selectetedTopic est falsy alors tu affiches le paragraphe sinon rien  */}
                {!selectedTopic ? <p>Please select a topic</p> : null}
                {/* si selectetedTopic est truthy alors tu affiches la div sinon rien  */}
                {selectedTopic ? (
                    <div>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                ) : null}
                <h2>Solution 2 : 1 ternaire</h2>
                {/* SOLUTION COURTE si selectetedTopic est truthy alors tu affiches la div sinon tu affiches la phrase  */}
                {selectedTopic ? (
                    <div>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                ) : (
                    <p>Please select a topic</p>
                )}

                <h2>Solution 3 : ternaire avec l'opérateur && (tricky ++)</h2>
                {!selectedTopic && <p>Please select a topic</p>}
                {selectedTopic && (
                    <div>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                )}
                <h2>Solution 4 : Affichage avec une variable uniquement</h2>
                <p>Elle a été déclaré au dessus du return suivie d'un if</p>
            </section>
        </Section>
    );
}
