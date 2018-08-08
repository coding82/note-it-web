import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {  Home, AllPosts, Login, Signup, Profile  } from './index';
import PropTypes from 'prop-types'
import { ThunkSingleUser } from '../store'


class Routes extends React.Component {

  componentDidMount() {
    this.props.loadInitialData();

  }


  render(){

    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/posts" component={AllPosts} />
        <Route exact path="/profile" component={Profile} />
      {/*
        <Route exact path="/users/:id" render={(props) => <Home {...props} users={this.props.users} />} />
        <Route exact path= component={SingleUser}/>
        <Route path="/" component={Home}/>
        <Route exact path="/users" component={AllUsers}/>

      */}

    </Switch>
    )
  }
}

// const mapState = state => {
//   return {
//     users: state.users
//   };
// };

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(ThunkSingleUser());
    }
  };
};


export default withRouter(connect(null, mapDispatch)(Routes))

