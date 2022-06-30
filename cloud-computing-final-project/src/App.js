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
import { Outlet, BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserContainer from './components/user/UserContainer.js'
import Nav from './components/Nav.js'
import Test from './components/Test.js'
import { loginUser, logoutUser, loadUserLists, signupUser } from './services/user.js'
import Authorize from './components/Authorize.js'

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
    loadUserLists().then((data) =>
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
        <UserContainer onLogin={this.login} signUp={this.signup} user={this.state.user}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={(routeProps) => <Nav onLogout={this.logout} {...routeProps}/>}/>
            // <Route path="/" element={Test}/>
          </Routes>
        </BrowserRouter>
          
        </div>
    );
  }
}

export default App;