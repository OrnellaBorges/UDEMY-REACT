import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcept2() {
    return (
        <>
            <h2>Using Map Method</h2>
            <ul>
                {CORE_CONCEPTS.map((objectItems) => (
                    <CoreConcept key={objectItems.title} {...objectItems} />
                ))}
            </ul>
        </>
    );
}
