import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utlis/useRestaurant";
import { addItem } from "../utlis/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();

  // Custom Hook
  const [restaurantInfo, restaurantMenuInfo] = useRestaurant(params.id);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  //if (!restaurantInfo) {
  //return <Shimmer />;
  //}
  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant ID: {params.id}</h1>

        <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId}></img>
        <h2>Restaurant Name : {restaurantInfo.name}</h2>
        <h2>Restaurant Area : {restaurantInfo.areaName}</h2>
        <h2>Restaurant Cuisines : {restaurantInfo.cuisines}</h2>
        <h2>Restaurant Cost of Two : {restaurantInfo.costForTwoMessage}</h2>
        <h2>Restaurant Average Rating : {restaurantInfo.avgRatingString}</h2>
      </div>
      <div></div>
      <div className="p-5">
        Restaurant Menu
        <ul>
          {Object.values(restaurantMenuInfo).map((item) => (
            <li className="p-2" key={item.card.info.id}>
              {item.card.info.name}{" "}
              <button
                className="p-2 m-2 bg-green-100"
                onClick={() => handleAddItem(item)}
              >
                Add Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
