import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {ThunkGetUsers } from '../store';
import {  Home, AllPosts, Auth  } from './index';
import fire from '../config/Fire'

class Routes extends React.Component {

  constructor(){
    super()
    this.state = {
      user: null
    }
    this.authListener = this.authListener.bind(this)
  }

  componentDidMount(){
    this.authListener()
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
        //localStorage.setItem('user', user.uid)
      } else {
        this.setState({user: null})
        //localStorage.removeItem('user')
      }
    })
  }

  render(){
    return(
    <Switch>
        <Route exact path="/auth" component={Auth}/>
        <Route exact path="/" component={Home}/>
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

// const mapState = state => {
//   return {
//     users: state.users
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     ThunkGetUsers: () => dispatch(ThunkGetUsers())
//   }
// }


export default withRouter(connect()(Routes))
