import React from 'react';

import {connect} from 'react-redux'

class Home extends React.Component {


  render(){
    return(

      <dir className="total">

        {/* <AllPosts id={this.props.match.params.id}/>
        <AllTrash id={this.props.match.params.id}/>
        <NewPost id={this.props.match.params.id}/> */}
        {
          this.props.user ?
          <p>Welcome back! {this.props.user.email}</p> :
          <p>Please login!</p>
        }

      </dir>
    )
  }
}

const mapState = state => {
  return {
    user: state.users
  }
}


export default connect(mapState)(Home)




