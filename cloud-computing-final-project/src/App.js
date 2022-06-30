import './App.css';
import React, { Component } from 'react';
import AddListContainer from './components/AddListContainer.js'
import ShowListsContainer from './components/ShowListsContainer.js'
import AddItemToListContainer from './components/AddItemToListContainer.js'


class App extends Component {
  render(){
    return (
      <body>
        <div>
        <br/>
          <p className="py-4 grid justify-items-center text-3xl text-indigo-400 font-mono">
            Welcome to your To-Do list 
          </p>
        </div>
        
        <div class="relative">
          <p class="absolute left-0">
            <br/>
            <AddListContainer />
            <br/>
            <br/>
          <p className="absolute right-0">
            <ShowListsContainer />
            <AddItemToListContainer />
            <br/>
          </p>
        </p>
        </div>
        
      </body>
    )};
}

export default App;


// import './App.css';
// import { Outlet, BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import UserContainer from './components/user/UserContainer.js'
// import Nav from './components/Nav.js'
// import Test from './components/Test.js'
// import { loginUser, logoutUser, loadUserLists, signupUser } from './services/user.js'
// import Authorize from './components/Authorize.js'
// 
// class App extends Component {
// 
//   state = {
//     user: {},
//     isLoggedIn: false
//   }
// 
//   login = (loginParams) => {
//     loginUser(loginParams)
//       .then((user) => {
//         localStorage.setItem("jwtToken", user.jwt)
//         this.setState({
//           user,
//           isLoggedIn: true
//         })
//       })
//   }
// 
//   signup = (loginParams) => {
//     signupUser(loginParams)
//       .then((user) => {
//         localStorage.setItem("jwtToken", user.jwt)
//         this.setState({
//           user,
//           isLoggedIn: true
//         })
//       })
//   }
// 
//   componentDidMount() {
//     //fetch request to backend for refresh_page method
//     loadUserLists().then((data) =>
//     this.setState({
//       user: data.user,
//       isLoggedIn: true
//       })
//     )
//   }
// 
//   logout = () => {
//     logoutUser()
//     this.setState({
//       user: null,
//       isLoggedIn: false
//     })
//   }
// 
//   render() {
//     return (
//         <div className="App">
//         <UserContainer onLogin={this.login} signUp={this.signup} user={this.state.user}/>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={(routeProps) => <Nav onLogout={this.logout} {...routeProps}/>}/>
//             // <Route path="/" element={Test}/>
//           </Routes>
//         </BrowserRouter>
// 
//         </div>
//     );
//   }
// }
// 
