import React from "react";

class UserCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="user-card">
        <div className="img-wrapper">
          <img src={this.props.user.avatar_url} alt="user" />
        </div>
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.login}</p>
        <div className="link-wrapper">
          <a href={this.props.user.url}>GitHub Page</a>
        </div>
      </section>
    );
  }
}

export default UserCard;
