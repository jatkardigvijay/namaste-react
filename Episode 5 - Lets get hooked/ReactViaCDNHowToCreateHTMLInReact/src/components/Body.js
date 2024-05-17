import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    // for loop/ map operation applied in react to get the restaurants dynamically
                }
                {
                    restaurantList.map(
                        restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    )
                }

            </div>
        </div>
    );
}

export default Body;