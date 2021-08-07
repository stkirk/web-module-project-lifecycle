import React from "react";
import FollowersList from "./FollowersList";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      displayFollowers: false,
    };
  }

  toggleFollowersList = () => {
    this.setState({
      ...this.state,
      displayFollowers: !this.state.displayFollowers,
    });
  };
  render() {
    return (
      <section className="user-card">
        <div className="img-wrapper">
          <img src={this.props.user.avatar_url} alt="user" />
        </div>
        <h3>{this.props.user.name}</h3>
        <p>User Name: {this.props.user.login}</p>
        <p>Company: {this.props.user.company}</p>
        <div className="link-wrapper">
          <a href={this.props.user.html_url}>GitHub Page</a>
        </div>
        <div onClick={this.toggleFollowersList} className="followers-list">
          {this.state.displayFollowers ? (
            <FollowersList followers={this.props.followers} />
          ) : (
            `See ${this.props.user.name}'s ${this.props.user.followers} followers`
          )}
        </div>
      </section>
    );
  }
}

export default UserCard;
