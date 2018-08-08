import React from 'react';
import { connect } from 'react-redux';
import { ThunkOneToTrash, ThunkEmptyPosts } from '../store';

class AllPosts extends React.Component {

  constructor(){
    super()

    this.moveToTrash = this.moveToTrash.bind(this);
  }

  moveToTrash(option, userId, postId){
    if(option === 'moveALLtoTrash') this.props.ThunkEmptyPosts(userId)
    else if(option === 'moveONEtoTrash') this.props.ThunkOneToTrash(userId, postId)

  }

  render(){
    const { users } = this.props
    return(
      <div className="postsNtrash">

        <div className="allPostsContainer">
        <h1>ALL POSTS</h1>
        <button onClick={() => this.moveToTrash('moveALLtoTrash', users.id)}>DELETE ALL</button>

        <div className="allPosts">
{users && users.posts && console.log(users.posts)}
        {
          users &&
          users.posts &&
          users.posts
          .map( (a, i) => {
            return (
              <div className="singlePost" key={users.posts.indexOf(a)}>

                <h3>{a}</h3>
                <button onClick={() => this.moveToTrash('editone', users.id, i)}>edit</button>
                <button onClick={() => this.moveToTrash('moveONEtoTrash', users.id, i)}>delete</button>
              </div>
            )
          })
        }
        </div>
        </div>


      </div>
    )
  }
}
const mapState = (state, ownProps) => {
  return {
    users: state.users
  };
};

const mapDispatch = (dispatch) => {

  return {
    ThunkOneToTrash: (userId, postId) => dispatch(ThunkOneToTrash(userId, postId)),
    ThunkEmptyPosts: (userId) => dispatch(ThunkEmptyPosts(userId)),
  }
}


export default connect(mapState, mapDispatch)(AllPosts)
