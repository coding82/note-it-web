import React from 'react';
import { AllPosts, AllTrash, NewPostForm } from './index'
import  { connect } from 'react-redux'


class Profile extends React.Component {
  constructor(){
    super()
    this.state = {
      note: true
    }

    this.toggleOption = this.toggleOption.bind(this)
  }

  toggleOption(option){
    if(option === 'notes' ) this.setState({note: true})
    else if(option === 'trash') this.setState({note: false})
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <button onClick={() => this.toggleOption('notes')}>All Notes!</button>
        <button onClick={() => this.toggleOption('trash')}>All Trash</button>

        {
          this.state.note ?
          <div>
          <AllPosts users={this.props.user}/>
          <NewPostForm user={this.props.user}/>
          </div>
          :
          <AllTrash users={this.props.user}/>
        }

      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.users
  };
};

export default connect(mapState)(Profile)
