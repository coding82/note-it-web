import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
export class AuthForm extends React.Component {

  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(evt){
    evt.preventDefault()
    const {email, password} = this.state
    this.props.auth(email, password, this.props.name)
  }

  render(){
    const {name, displayName, handleSubmit, error} = this.props


  return (
    <div>

      <form onSubmit={this.handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input onChange={this.handleChange} name="email" type="text" value={this.state.email} />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input onChange={this.handleChange} name="password" type="password" value={this.state.password}/>
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>

    </div>
  )
}}


/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
export const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',

  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
  }
}

const mapDispatch = (dispatch) => {
  return {
    auth: (email, password, formName) => dispatch(auth(email, password, formName))

  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  error: PropTypes.object
}
