import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
   
  }
// we can make componentDidMount async but not useEffect
   componentDidMount() {
   

  }

  render() {
    return (
      <div>
        <h1>About us Page</h1>
        <p> This is the Namaste React Course</p>
        <Outlet />
        <ProfileFunctional name={"Akash"} />
        <ProfileClass name={"Akash"} />
      </div>
    );
  }
}

export default About;
