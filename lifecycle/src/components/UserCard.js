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
      <div className="user-card">
        <section className="user-profile">
          <div className="img-wrapper">
            <img src={this.props.user.avatar_url} alt="user" />
          </div>
          <h3>{this.props.user.name}</h3>
          <p>User Name: {this.props.user.login}</p>
          <p>Company: {this.props.user.company}</p>
          <div className="link-wrapper">
            <a href={this.props.user.html_url}>GitHub Page</a>
          </div>
        </section>

        <section className="follower-section">
          <div className="followers-list">
            <div className="button-div">
              <button onClick={this.toggleFollowersList}>
                {this.state.displayFollowers
                  ? "Hide Followers"
                  : "Show Followers"}
              </button>
            </div>

            {this.state.displayFollowers ? (
              <FollowersList followers={this.props.followers} />
            ) : (
              `${this.props.user.name} has ${this.props.user.followers} followers on GitHub`
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default UserCard;
