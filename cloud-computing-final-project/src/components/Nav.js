import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{

  render() {
    if (localStorage.getItem('jwtToken')){
      return (
        <div className="ui secondary menu">
          <NavLink activeClassName="" activeStyle={{ color: 'red' }} className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active" className="right item" onClick={this.props.onLogout} to="/">Log Out</NavLink>
        </div>
      )
    } else {
      return (
        <div className="ui secondary menu">
          <NavLink activeClassName="" activeStyle={{ color: 'red' }} className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active" className="right item" to="/login">Log In</NavLink>
        </div>
      )
    }
  }
}

export default Nav