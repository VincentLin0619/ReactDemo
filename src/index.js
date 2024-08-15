// 1. import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2. get a reference to the div with ID root
const el = document.getElementById("root");

// 3. tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. create a react component
function App() {
    return <h1>Hi there!</h1>;
}

// 5. show the component on the screen
root.render(<App />);