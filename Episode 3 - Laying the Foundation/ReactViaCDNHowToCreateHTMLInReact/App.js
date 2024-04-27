import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <h1>
            Namaste React !
        </h1>
)};

// normal javascript code calling in react
const number = 10000;

const HeadingCompoment = () => {
    return (
        <div id="container">
            <Title/>
            {number}
            <h1>Namaste dj !</h1>
        </div>
)};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompoment/>);