import React from "react";
import "./DynamicList.css";

export default function Todo({ text }) {
    return <li className="list">{text}</li>;
}
