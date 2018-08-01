import React from 'react';
import { AllPosts, AllTrash, NewPost } from './index'

export default class Home extends React.Component {

  render(){
    return(

      <dir className="total">

        <AllPosts id={this.props.match.params.id}/>
        <AllTrash id={this.props.match.params.id}/>
        <NewPost id={this.props.match.params.id}/>

      </dir>
    )
  }

}

