// how to do the following code in react
/* 
 <div id ="parent">
        <div id ="child">
            <h1> </h1>
        </div>   
 </div>
*/

// how to do the above code in react
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"I am an h1 tag"))
);

console.log(parent);

// render the heading h1 in the div id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);