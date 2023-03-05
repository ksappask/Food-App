import { useState } from "react";
import Logo from "../assets/logo-image/logo.jpeg";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
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

  return (
    <div
      style={{ backgroundColor: "red", fontSize: "20px" }}
      className="header"
    >
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
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
