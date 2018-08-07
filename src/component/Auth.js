import React from 'react';
import {auth} from 'firebase/app';
import fire from '../config/Fire';

export default class Auth extends React.Component {
    constructor(){
      super()
      this.state = {
        redirect: false,
        email: '',
        password: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleSignup = this.handleSignup.bind(this)
      this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(event){
      this.setState({[event.target.name]: event.target.value })
      console.log(this.state)
    }

    handleSubmit(event){
      event.preventDefault()
      console.table([{
        email: this.state.email,
        password: this.state.password
      }])
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{}).catch( err => console.log(err))
    }

    handleLogin(){
      const { email, password } = this.state

    }

    handleSignup(){
      const { email, password } = this.state

    }

    render(){
      return(
        <div>

          <form onSubmit={this.handleSubmit}>
            <label for="email">email:</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>

            <label for="password">password:</label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />

            <input onClick={this.handleLogin} type="submit" name="login" value="login"/>
            <input onClick={this.hadleSignup} type="submit" name="signup" value="signup"/>
            <input type="submit" name="logout" value="logout"/>
          </form>
        </div>
      )

    }

}
