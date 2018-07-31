import React from 'react';

export default class Auth extends React.Component {
    constructor(){
      super()
      this.state = {
        email: '',
        password: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
      this.setState({[event.target.name]: event.target.value })
      console.log(this.state)
    }

    handleSubmit(event){
      event.preventDefault()
      console.log(this.state)
      this.setState({email: '', password: ''})
    }

    render(){
      return(
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <label for="">email:</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>

            <label for="">password:</label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />

            <input type="submit" value="login"/>
            <input type="submit" value="signup"/>
            <input type="submit" value="logout"/>
          </form>
        </div>
      )

    }

}
