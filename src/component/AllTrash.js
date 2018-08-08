import React from 'react';
import { connect } from 'react-redux';
import { ThunkRestoreOne, ThunkRestoreAll, ThunkDeleteOne, ThunkEmptyTrash } from '../store';


class AllTrash extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(option, userId, postId){
    if(option === 'restoreONE') this.props.ThunkRestoreOne(userId, postId)
    else if(option === 'deleteONE') this.props.ThunkDeleteOne(userId, postId)

    else if(option === 'restoreALL') this.props.ThunkRestoreAll(userId)
    else if(option === 'deleteALL') this.props.ThunkEmptyTrash(userId)
  }



  render(){
    const { users } = this.props
      console.log(this.props)
    return(
      <div className="postsNtrash">

        <div className="allTrashContainer">
        <h1>ALL Trash</h1>
        <button onClick={() => this.handleClick('restoreALL', users.id)}>Restore ALL</button>
        <button onClick={() => this.handleClick('deleteALL', users.id)}>DELETE FOREVER</button>


        <div className="allTrash">
        {
          users &&
          users.trash &&
          users.trash.length > 0
          ? users.trash.map( (a, i) => {
            return (
              <div className="singleTrash" key={i}>
                <h3>{a}</h3>
                <button onClick={() => this.handleClick('restoreONE', users.id, i)}>restore this</button>
                <button onClick={() => this.handleClick('deleteONE', users.id, i)}>DELETE ONE FOREVER</button>
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

const mapDispatch = (dispatch) => {
  return {
    ThunkRestoreOne: (userId, postId) => dispatch(ThunkRestoreOne(userId, postId)),
    ThunkRestoreAll: (userId) => dispatch(ThunkRestoreAll(userId)),
    ThunkEmptyTrash: (userId) => dispatch(ThunkEmptyTrash(userId)),
    ThunkDeleteOne: (userId, postId) => dispatch(ThunkDeleteOne(userId, postId))
  }
}

export default connect(mapState, mapDispatch)(AllTrash)
