import React from 'react';
import { connect } from 'react-redux';
import { ThunkNewPost } from '../store';


class NewPost extends React.Component {
  constructor(){
    super()
    this.state = {
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const content = this.state;
    this.setState({ content: ''});
    this.props.ThunkNewPost(this.props.user.id, content)
  }

  handleChange(event){
    this.setState({content: event.target.value})
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>content</label>
        <input onChange={this.handleChange} type="textarea" value={this.state.content}/>
        <button>submit</button>
      </form>
    )

  }
}

const mapDispatch = dispatch => {
  return {
    ThunkNewPost: (userId, content) => dispatch(ThunkNewPost(userId, content))
  }
}


export default connect(null, mapDispatch)(NewPost)
