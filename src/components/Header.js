import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://i.pinimg.com/736x/49/4c/28/494c28fd3aa149b13e013583f8fd9881.jpg"
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
