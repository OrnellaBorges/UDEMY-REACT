import React from "react";

export const userData = {
    firstName: "Maximilian", // feel free to replace the name value
    lastName: "Schwarzmüller", // feel free to replace the name value
    title: "Instructor", // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
    return (
        <div id="user" data-testid="user">
            <h2>
                {userData.firstName}
                {userData.lastName}
            </h2>
            <p>{userData.title}</p>
        </div>
    );
}

// DON'T edit the App component code
function Practice2() {
    return (
        <div id="app">
            <h1>Time to Practice</h1>
            <p>Welcome on board of this course! You got this 💪</p>
            <User /> ici on import User component
        </div>
    );
}

export default Practice2;
