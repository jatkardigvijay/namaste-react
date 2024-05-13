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

// Css using JavaScript Object
// write here code and then call in {} as below
const styleCard = {
    backgroundColor : "#f0f0f0"
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0" }}>
        <img className="res-logo"
        alt="res-logo" src="https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"/>
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/><RestaurantCard/><RestaurantCard/>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);