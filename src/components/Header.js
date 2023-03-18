import { useState } from "react";
import Logo from "../assets/logo-image/logo.jpeg";
import { Link } from "react-router-dom";
import UserContext from "../utlis/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2 inline "
      alt="logo"
      // src="https://i.pinimg.com/736x/49/4c/28/494c28fd3aa149b13e013583f8fd9881.jpg"
      src={Logo}
    ></img>
  </a>
);

const loggedInUser = () => {
  //make api call to authenticate

  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // style={{ backgroundColor: "red", fontSize: "20px" }}

  //
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg  sm:flex-shrink md:flex-shrink lg:flex-row">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>

      <span className="p-10 font-bold text-red-900">
        {"Welcome " + user.name}
      </span>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
