import React from 'react'
import { Navigate } from 'react-router-dom'

function Authorize(RenderedComponent, props){
  return class extends React.Component{

    render(){
      if (localStorage.getItem('jwtToken') && this.props.location.pathname === "/login") {
        return <Navigate to="/" />
      } else {
        return (
          <RenderedComponent {...this.props} {...props}/>
        )
      }

      }
    }

}

export default Authorize