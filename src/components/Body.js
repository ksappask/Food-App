import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utlis/helper";
import useOnline from "../utlis/useOnline";
import { useContext } from "react";
import UserContext from "../utlis/UserContext";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //Context from Body.js Setted there in Body.js
  const { user, setUser } = useContext(UserContext);

  //call back will come after every component renders if we have empty array as input
  useEffect(() => {
    getRestaurants();
  }, []); // If we have [] Only Once after load chrome tab
  //[searchText] => every time serachText renders + calls after every change in searchtext

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //Optional Chaining ?.
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }

  if (!allRestaurants) return <h1>No Restaurants Found</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-pink-100  p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="button"
          className="p-2 m-2 w-20 bg-purple-600 hover:bg-purple-900 text-white rounded-md" //Filtering Data
          onClick={() => {
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
          value={user.name}
        ></input>
        <input
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
          value={user.email}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={"/restaurant/" + restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
