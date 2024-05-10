import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
       <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
       </div> 
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);