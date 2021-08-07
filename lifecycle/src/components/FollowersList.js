import React from "react";

class FollowersList extends React.Component {
  render() {
    return (
      <div className="followers">
        <h4>FOLLOWERS LIST</h4>
        {this.props.followers.map((follower) => (
          <span key={follower.id}>{follower.login}, </span>
        ))}
      </div>
    );
  }
}

export default FollowersList;
