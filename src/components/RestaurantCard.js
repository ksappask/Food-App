import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
  return (
    //Dynamic Square Bracket w-[200px]
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating + " Ratings"}</h4>
    </div>
  );
};

export default RestaurantCard;
