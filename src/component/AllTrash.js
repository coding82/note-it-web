import React from 'react';
import { connect } from 'react-redux';
import { ThunkRestoreOne, ThunkRestoreAll } from '../store';


class AllTrash extends React.Component {
  constructor(){
    super()

    this.restoreOne = this.restoreOne.bind(this)
    this.restoreAll = this.restoreAll.bind(this)
  }

  restoreOne(postId){
    this.props.ThunkRestoreOne(postId)
  }

  restoreAll(){
    this.props.ThunkRestoreAll()
  }


  render(){
    const { users } = this.props
      console.log(this.props)
    return(
      <div className="postsNtrash">

        <div className="allTrashContainer">
        <h1>ALL Trash</h1>

        <div className="allTrash">
        {
          users &&
          users.trash &&
          users.trash.length > 0
          ? users.trash.map( (a, i) => {
            return (
              <div className="singleTrash" key={i}>
                <h3>{a[0]}</h3>
                <button onClick={() => this.restoreOne(i)}>restore this</button>
              </div>
            )
          })
          :   <div>
                <h3>The trash is empty</h3>
              </div>
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
  const id = +ownProps.id
  return {
    ThunkRestoreOne: (postId) => dispatch(ThunkRestoreOne(id, postId)),
    ThunkRestoreAll: () => dispatch(ThunkRestoreAll())

  }
}

export default connect(mapState, mapDispatch)(AllTrash)
