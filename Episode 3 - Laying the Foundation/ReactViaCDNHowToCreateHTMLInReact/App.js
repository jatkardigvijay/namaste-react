import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>

const Title = () => {
    return (
        <h1>
            {elem} 
            Namaste React !!!
        </h1>
)};

// normal javascript code calling in react
const number = 10000;

const HeadingCompoment = () => {
    return (
        <div id="container">
            {Title()}
            <h1>Namaste dj funcational component !</h1>
        </div>
)};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompoment/>);