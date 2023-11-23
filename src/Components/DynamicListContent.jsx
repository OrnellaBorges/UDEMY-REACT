import React from "react";

import Todo from "./Todo";

// don't remove the export keyword here!
export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// don't change the Component name "App"
export default function App() {
    return (
        <ul className="container">
            {DUMMY_TODOS.map((items, index) => (
                <Todo key={index} text={items} />
            ))}
        </ul>
    );
}
