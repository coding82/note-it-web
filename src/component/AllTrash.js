import React from 'react';
import { connect } from 'react-redux';

class AllTrash extends React.Component {

  render(){
    const { user } = this.props
    console.log(user)
    return(
      <div className="postsNtrash">

        <div className="allTrashContainer">
        <h1>ALL Trash</h1>

        <div className="allTrash">
        {
          user &&
          user.trash.length > 0
          ? user.trash.map( (a, i) => {
            return (
              <div className="singleTrash" key={i}>
                <h3>{a}</h3>
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
    user: state.users.length && state.users.find( person => person.id === +ownProps.id)
  };
};


export default connect(mapState)(AllTrash)
