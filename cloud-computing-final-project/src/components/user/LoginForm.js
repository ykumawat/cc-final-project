import React from 'react'
import {signupUser} from '../../services/user'

class LoginForm extends React.Component{

  constructor(){
    super()

    this.state = {
      usernameInput: "",
      passwordInput: "",
      newUser: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.usernameInput !== "" && this.state.passwordInput !== ""){
      const user = { username: this.state.usernameInput, password: this.state.passwordInput, newUser: this.state.newUser }
      this.props.onSubmit(user)
    }
    this.setState({
      usernameInput: "",
      passwordInput: "",
      newUser: false
    })
  }

handleUserButton = (event) => {
  this.setState({
    newUser: !this.state.newUser
  })
}

handleUsernameChange = (event) => {
  this.setState({
    usernameInput: event.target.value
  })
}

handlePasswordChange = (event) => {
  this.setState({
    passwordInput: event.target.value
  })
}


  render(){
    console.log(this.state)
    return(
      <div>
       <h3>Welcome to the To Do List application! Log in or create a new account below</h3>
        // <form onSubmit={this.handleSubmit} className="ui form">
        //   <div className ="center fields">
        //     <div className="six wide field">
        //       <input type="text" value={this.state.usernameInput} onChange={this.handleUsernameChange} placeholder="username" />
        //     </div>
        //     <div className="six wide field">
        //      <input type="password" value={this.state.passwordInput} onChange={this.handlePasswordChange} placeholder="password"/>
        //     </div>
        //     <div className="radio">
        //       <label>
        //         <input type="radio" name="new" onChange={this.handleUserButton}/>
        //         New User
        //       </label>
        //     </div>
        //     <input type="submit"/>
        //   </div>
        // </form>
      </div>
    )

  }
}

export default LoginForm