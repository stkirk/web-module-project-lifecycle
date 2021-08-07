import React from "react";

class FollowerCard extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <div className="follower-card">
        <h4>{follower.login}</h4>
      </div>
    );
  }
}

export default FollowerCard;
