import React from 'react';
import { connect } from 'react-redux';
import { ThunkOneToTrash, ThunkSingleUser } from '../store';

class AllPosts extends React.Component {

  constructor(){
    super()

    this.moveToTrash = this.moveToTrash.bind(this);
  }


  moveToTrash(postId){
    this.props.ThunkOneToTrash(this.props.user.id, postId)

  }

  render(){
    const { user } = this.props
    console.log(user)
    return(
      <div className="postsNtrash">

        <div className="allPostsContainer">
        <h1>ALL POSTS</h1>

        <div className="allPosts">
        {
          user &&
          user.posts.slice(0).reverse().map( (a, i) => {
            return (
              <div className="singlePost" key={user.posts.indexOf(a)}>

                <h3>{a}</h3>
                <button onClick={() => this.moveToTrash(user.posts.indexOf(a))}>delete</button>
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
    user: state.users.length && state.users.find( a => a.id == +ownProps.id)
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    ThunkOneToTrash: (userId, postId) => dispatch(ThunkOneToTrash(userId, postId))
  }
}


export default connect(mapState, mapDispatch)(AllPosts)
