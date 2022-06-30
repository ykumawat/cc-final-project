// import './App.css';
// 
// function App() {
//   return (
//     <div className="grid text-3xl text-indigo-400 font-mono justify-items-center">
//       <p>
//         Welcome to your To-Do list!
//       </p>
//     </div>
//   );
// }
// 
// export default App;

import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import UserContainer from './components/user/UserContainer.js'
import Nav from './components/Nav.js'
import { loginUser, logoutUser, loadUserPrefs, signupUser } from './services/user'
import Authorize from './components/Authorize'

class App extends Component {

  state = {
    user: {},
    isLoggedIn: false
  }

  login = (loginParams) => {
    loginUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true
        })
      })
  }

  signup = (loginParams) => {
    signupUser(loginParams)
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        this.setState({
          user,
          isLoggedIn: true
        })
      })
  }

  componentDidMount() {
    //fetch request to backend for refresh_page method
    loadUserPrefs().then((data) =>
    this.setState({
      user: data.user,
      isLoggedIn: true
      })
    )
  }

  logout = () => {
    logoutUser()
    this.setState({
      user: null,
      isLoggedIn: false
    })
  }

  render() {
    return (
        <div className="App">
          <Route path="/" render={(routeProps) => <Nav onLogout={this.logout} {...routeProps}/>}/>
          <UserContainer onLogin={this.login} signUp={this.signup} user={this.state.user}/>
        </div>
    );
  }
}

export default App;