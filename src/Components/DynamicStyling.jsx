import React from "react";
import { useState } from "react";
import "./DynamicStyle.css";

// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = useState(false);

    function handleClick() {
        setHighlighted((isHighlighted) => !isHighlighted);
    }

    return (
        <div className="styled">
            <p className={highlighted ? "activ" : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
