import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const{cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData?.data;
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0" }}>
        <img className="res-logo"
        alt="res-logo" 
        
        src="https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        
       /*
       src={CDN_URL+cloudinaryImageId}
       */ 
       />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;