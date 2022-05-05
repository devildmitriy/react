import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class Users extends Component {
  state = { showUsers: true };

  toggleUsersHandler = () => {
    this.setState((pervState) => ({ showUsers: !pervState.showUsers }));
  };

  componentDidUpdate() {
    if(this.props.users.length === 0) {
      throw new Error('no users provided!')
    }
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
