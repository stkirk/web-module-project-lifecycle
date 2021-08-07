import React from "react";
import FollowerCard from "./FollowerCard";

class FollowersList extends React.Component {
  render() {
    return (
      <div className="followers">
        <h4>FOLLOWERS LIST</h4>
        <div className="followers-wrapper">
          {this.props.followers.map((follower) => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default FollowersList;
