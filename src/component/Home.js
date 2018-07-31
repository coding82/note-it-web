import React from 'react';
import { AllPosts, AllTrash } from './index'

export default class Home extends React.Component {

  render(){
    return(
      <dir className="total">

        <AllPosts />
        <AllTrash />

      </dir>
    )
  }

}
