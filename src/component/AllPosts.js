import React from 'react';
import { connect } from 'react-redux';
import { ThunkOneToTrash, ThunkSingleUser } from '../store';

class AllPosts extends React.Component {

  constructor(){
    super()

    this.moveToTrash = this.moveToTrash.bind(this);
  }

  componentDidMount(){
    this.props.ThunkSingleUser()
  }

  moveToTrash(postId){
    console.log(postId)
    this.props.ThunkOneToTrash(postId)

  }

  render(){
    const { users } = this.props
    return(
      <div className="postsNtrash">

        <div className="allPostsContainer">
        <h1>ALL POSTS</h1>

        <div className="allPosts">
        {
          users &&
          users.posts &&
          users.posts
          .map( (a, i) => {
            return (
              <div className="singlePost" key={users.posts.indexOf(a)}>

                <h3>{a[0]}</h3>
                <button onClick={() => this.moveToTrash(i)}>delete</button>
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

const mapDispatch = (dispatch, ownProps) => {
  const userId = +ownProps.id;
  return {
    ThunkOneToTrash: postId => dispatch(ThunkOneToTrash(userId, postId)),
    ThunkSingleUser: () => dispatch(ThunkSingleUser(userId))
  }
}


export default connect(mapState, mapDispatch)(AllPosts)
