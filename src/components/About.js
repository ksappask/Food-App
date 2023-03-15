import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile";
import React from "react";
import UserContext from "../utlis/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  // we can make componentDidMount async but not useEffect
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About us Page</h1>
        <UserContext.Consumer>
          {({ user }) => <h1 className="font-bold">{user.name}</h1>}
        </UserContext.Consumer>
        <p> This is the Namaste React Course</p>
        <Outlet />
        <ProfileFunctional name={"Akash"} />
        <ProfileClass name={"Akash"} />
      </div>
    );
  }
}

export default About;
