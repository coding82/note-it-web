import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { connect } from "react-redux";

class AuthList extends React.Component {
  constructor() {
    super();

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.logout()
  }

  render() {

    return (
      <dir className="total">
        <ul>
          {this.props.user && this.props.user.id ? (
            <li>
              <button onClick={this.handleLogOut}>Log Out</button>
            </li>
          ) : (
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Log-in</Link>
              </li>
              <li>
                <Link to="/signup">Sign-up</Link>
              </li>

            </div>
          )}
        </ul>
      </dir>
    );
  }
}

const mapState = state => {
  return {
    user: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapState,
  mapDispatch
)(AuthList);
