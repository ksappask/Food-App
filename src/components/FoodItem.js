import { useContext } from "react";
import { IMG_CDN_URL } from "../Constants";
import UserContext from "../utlis/UserContext";

const FoodItem = ({ name, imageId, price }) => {
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;

  const { user } = useContext(UserContext);
  return (
    //Dynamic Square Bracket w-[200px]
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + imageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>

      <h4>Price : {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
