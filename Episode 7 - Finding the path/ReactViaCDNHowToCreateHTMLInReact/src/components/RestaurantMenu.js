import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import restaurantList from "../utils/mockdata";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(restaurantList);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://api.zomato.com/dining-gw/consumer/web/upcoming-booking/get?res_id=51639"
        );
        const json = await data.json();
        setResInfo(restaurantList)
    };

  return resInfo === null ? <Shimmer/> : (
    <div className="menu">
        <h1>Name of the Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu