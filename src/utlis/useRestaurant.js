import { useState } from "react";
import { useEffect } from "react";
import { FETCH_MENU_URL } from "../Constants";
const useRestaurant = (resId) => {
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log(resId);
    const data = await fetch(FETCH_MENU_URL + resId);
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
  return [restaurantInfo, restaurantMenuInfo];
};

export default useRestaurant;
