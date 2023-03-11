import { useState } from "react";
import Logo from "../assets/logo-image/logo.jpeg";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2 "
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
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
