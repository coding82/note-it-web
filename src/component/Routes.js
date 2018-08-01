import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {ThunkGetUsers } from '../store';
import {  Home, AllPosts  } from './index';

class Routes extends React.Component {

  componentDidMount(){
    this.props.ThunkGetUsers()
  }

  render(){
    return(
    <Switch>
        <Route exact path="/users/:id" render={(props) => <Home {...props} users={this.props.users} />} />
      {/*
        <Route exact path= component={SingleUser}/>
        <Route path="/" component={Home}/>
        <Route exact path="/users" component={AllUsers}/>

      */}
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
