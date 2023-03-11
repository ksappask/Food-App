import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utlis/useRestaurant";
const RestaurantMenu = () => {
  const params = useParams();

  // Custom Hook
  const [restaurantInfo, restaurantMenuInfo] = useRestaurant(params.id);

  //if (!restaurantInfo) {
  //return <Shimmer />;
  //}
  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant ID: {params.id}</h1>

        <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId}></img>
        <h2>Restaurant Name : {restaurantInfo.name}</h2>
        <h2>Restaurant Area : {restaurantInfo.areaName}</h2>
        <h2>Restaurant Cuisines : {restaurantInfo.cuisines}</h2>
        <h2>Restaurant Cost of Two : {restaurantInfo.costForTwoMessage}</h2>
        <h2>Restaurant Average Rating : {restaurantInfo.avgRatingString}</h2>
      </div>
      <div>
        {" "}
        <ul>
          {Object.values(restaurantMenuInfo).map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
