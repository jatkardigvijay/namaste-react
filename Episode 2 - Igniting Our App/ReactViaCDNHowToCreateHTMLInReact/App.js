import React from "react";
import ReactDOM from "react-dom/client";


// how to do the following code in react
/* 
 <div id ="parent">
        <div id ="child">
            <h1>I am an h1 tag !</h1>
            <h2>I am an h1 tag !</h2>
        </div>
        <div id ="child2">
            <h1>I am an h1 tag !</h1>
            <h2>I am an h1 tag !</h2>
        </div>   
 </div>
*/

// how to do the above code in react
const parent = React.createElement(
    "div",
    {id:"parent"},[

        React.createElement(
            "div",
            {id:"child"},[
                React.createElement("h1",{},"This is namaste react 🚀"),
                React.createElement("h2",{},"I am an h2 tag")
            ]),
        React.createElement(
            "div",
            {id:"child2"},[
                    React.createElement("h1",{},"I am an h1 tag"),
                    React.createElement("h2",{},"I am an h2 tag")
            ])
    ]
);

// Note : this above is for 4-5 lines of html we printing.
// if we had a large application then it would become difficult
// Hence, we use JSX

// render the heading h1 in the div id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);