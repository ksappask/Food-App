import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating + " Ratings"}</h4>
    </div>
  );
};

export default RestaurantCard;
