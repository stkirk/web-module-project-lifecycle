import React from "react";

class FollowerCard extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <div className="follower-card">
        <div className="follower-img">
          <img src={follower.avatar_url} alt="follower" />
        </div>
        <h4>GitHub User: {follower.login}</h4>
        <div className="link-wrapper">
          <a href={follower.html_url}>GitHub Profile</a>
        </div>
      </div>
    );
  }
}

export default FollowerCard;
