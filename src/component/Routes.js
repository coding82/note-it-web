import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import { ThunkEditPost, ThunkEmptyPosts, ThunkEmptyTrash, ThunkGetUsers, ThunkNewPost, ThunkNewUser, ThunkOneToTrash, ThunkSingleUser } from '../store';
import {  ThunkGetUsers } from '../store';
import {  Home, AllPosts, Auth } from './index';

class Routes extends React.Component {

  componentDidMount(){
    this.props.ThunkGetUsers()
  }

  render(){
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={AllPosts}/>
{/*
        <Route path="/" component={Home}/>
        <Route exact path="/users" component={AllUsers}/>
        <Route exact path="/users/:id" component={SingleUser}/> */}

    </Switch>
    )
  }
}

const mapState = state => {
  return {
    users: state.users
  };
};

const mapDispatch = dispatch => {
  return {
    ThunkGetUsers: () => dispatch(ThunkGetUsers())
  }
}


export default withRouter(connect(mapState, mapDispatch)(Routes))
