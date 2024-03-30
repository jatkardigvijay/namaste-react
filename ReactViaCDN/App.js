//create heading
const heading = React.createElement("h1",{id:"heading"},"Hello World from React !");

// render the heading h1 in the div id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);