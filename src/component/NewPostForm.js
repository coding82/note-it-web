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
    console.log(this.state)
    const content = this.state;
    this.setState({ content: ''});
    this.props.ThunkNewPost(this.props.id, content)
    event.preventDefault()
  }

  handleChange(event){
    this.setState({content: event.target.value})
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>content</label>
        <input onChange={this.handleChange} type="textarea" />
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
