import { useState, Fragment } from "react";
import Header from "./Components/Header";
//import CoreConcept from "./Components/CoreConcept";
import CoreConcept2 from "./Components/CoreConcept2";
import FormContainer from "./Components/Form/FormContainer";
import Practice4 from "./Practice4-props";
import Practice5 from "./Practice5-useStates";
import Popup from "./Components/PopUp";
import DynamicStyle from "./Components/DynamicStyling";
import DynamicList from "./Components/DynamicListContent";
import Examples from "./Components/Examples";
import Section from "./Components/Section";

import "./index.css";
function App() {
    return (
        <>
            <Header />
            <main>
                <Section title="Core Concept" id="core-concepts">
                    <CoreConcept2 />
                </Section>
                <Section title="Examples" id="Examples">
                    <Examples />
                </Section>

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

export default App;
