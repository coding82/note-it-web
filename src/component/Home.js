import React from 'react';
import { AllPosts, AllTrash, NewPost, Auth } from './index'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {

  render(){
    return(

      <dir className="total">

        {/* <AllPosts id={this.props.match.params.id}/>
        <AllTrash id={this.props.match.params.id}/>
        <NewPost id={this.props.match.params.id}/> */}
        <Link to="/auth">Log-in or Sign-up</Link>

      </dir>
    )
  }

}

