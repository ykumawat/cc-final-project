import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm.js'
import Authorize from '../Authorize'
import UserProfileContainer from './UserProfileContainer.js'


class UserContainer extends React.Component{

  handleLoginSubmit = (user) => {
    if (user.newUser === false) {
      this.props.onLogin({username: user.username, password: user.password})
    } else {
      this.props.signUp({username: user.username, password: user.password})
    }
  }

  render(){
    const AuthLoginForm = Authorize(LoginForm)
    return(
      <div>
        <Route exact path="/login" render={(props) => <AuthLoginForm onSubmit={this.handleLoginSubmit}  {...props}/> }/>
        <Route exact path="/users/me" render={(props) => <UserProfileContainer user={this.props.user} {...props}/>}/>
      </div>
    )
  }
}

export default UserContainer