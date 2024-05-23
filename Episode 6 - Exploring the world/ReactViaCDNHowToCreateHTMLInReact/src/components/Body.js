import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body = () => {

    // super powerful react variables
    const [listOfRestaurants, setListOfRestaurant] = useState(restaurantList);

    useEffect(()=>{
        console.log('useEffect Called');
    }, []);

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

    return (
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