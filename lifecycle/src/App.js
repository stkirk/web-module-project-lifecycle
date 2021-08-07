import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/stkirk")
      .then((res) => {
        console.log("GitHub Response", res.data);
        this.setState({
          ...this.state,
          user: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <h1>gitHub User</h1>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
