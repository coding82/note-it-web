import React from 'react';
import { connect } from 'react-redux';

class AllPosts extends React.Component {

  render(){
    const { user } = this.props
    return(
      <div className="postsNtrash">

        <div className="allPostsContainer">
        <h1>ALL POSTS</h1>

        <div className="allPosts">
        {
          user && user.posts.map( (a, i) => {
            return (
              <div className="singlePost" key={a[i]}>
                <h3>{a}</h3>
                <button>delete</button>
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

const mapState = state => {
  return {
    user: state.users[0]
  };
};


export default connect(mapState)(AllPosts)
