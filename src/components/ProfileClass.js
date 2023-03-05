import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "Dummy Name",
      location: "Dummy Location",
      count: 0,
    };
  }
  // called after VERY FIRST  render()
  async componentDidMount() {
    // good place for making api call like useeffect in functional component

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  //AFTER EVERY SECOND TO MANY RENDER , IT WILL BE CALLED
  componentDidUpdate() {}

  //When you go away from this current componet it will be called
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <h1>Profile Class</h1>
        <h2> Name : {this.props.name}</h2>
        <h2>UserName : {this.state.userInfo.name}</h2>
        <h2>Location : {this.state.userInfo.location}</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Count : {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}

export default Profile;
