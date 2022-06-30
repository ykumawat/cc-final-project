import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={(props) => <AuthLoginForm onSubmit={this.handleLoginSubmit}  {...props}/> }/>
          <Route exact path="/login" element={(props) => <AuthLoginForm onSubmit={this.handleLoginSubmit}  {...props}/> }/>
          <Route exact path="/users/me" element={(props) => <UserProfileContainer user={this.props.user} {...props}/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

export default UserContainer