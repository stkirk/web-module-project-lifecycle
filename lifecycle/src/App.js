import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Ladrillo")
      .then((res) => {
        console.log("GitHub Response", res.data);
        this.setState({
          ...this.state,
          user: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      console.log("User state change!");
      axios
        .get("https://api.github.com/users/Ladrillo/followers")
        .then((res) => {
          console.log("FOLLOWERS RESPONSE", res.data);
          this.setState({
            ...this.state,
            followers: res.data,
          });
        })
        .catch((err) => console.log("ERROR", err));
    }
  }
  render() {
    return (
      <div className="App">
        <h1>gitHub User</h1>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
