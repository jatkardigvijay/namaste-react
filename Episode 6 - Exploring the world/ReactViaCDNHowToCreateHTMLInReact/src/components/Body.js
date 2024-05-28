import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//normal js variables
let listOfRestaurantsJS = [
    {
        data: {
            id: "74453",
            name: "Domino's Pizza",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: ["Pizzas"],
            costForTwo: 40000,
            deliveryTime: 45,
            avgRating: "4.0"
        }
        
    },
    {
        data: {
            id: "74454",
            name: "KFC",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: ["Pizzas"],
            costForTwo: 40000,
            deliveryTime: 45,
            avgRating: "4.4"
        }
    },
    {
        data: {
            id: "74456",
            name: "Mc'Donalds",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: ["Burgers"],
            costForTwo: 30000,
            deliveryTime: 15,
            avgRating: "4.3"
        }
    }
];

const Body = () => {

    // super powerful react variables
    const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);

    useEffect(()=>{
        //api call can write here or write a method outside and call it here.
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=53.34020&lng=-6.27120&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    //convert data to json
    const json = await data.json(data);

    console.log(json);
    //optional chaining means we add question marks ? as below
    // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    // code optimized to conditional rendering
    return listOfRestaurantsJS.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    ); 
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    // for loop/ map operation applied in react to get the restaurants dynamically
                }
                {
                    listOfRestaurants.map(
                        restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    )
                }

            </div>
        </div>
    );
}

export default Body;