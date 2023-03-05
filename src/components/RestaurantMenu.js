import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const params = useParams();

  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log(params.id);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.92690167665635&lng=80.09482506662607&restaurantId=" +
        params.id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[0].card.card.info);
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );

    setRestaurantInfo(json.data.cards[0].card.card.info);
    setRestaurantMenuInfo(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

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
