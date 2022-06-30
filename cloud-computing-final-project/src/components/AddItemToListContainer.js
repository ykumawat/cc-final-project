import React from 'react'
import { Route, Link } from 'react-router-dom'

class ShowListsContainer extends React.Component {
  
  constructor(){
   super();

 }
  
  getLists = async () =>{
    await fetch('http://localhost:5001/api/lists')
    .then((resp)=>resp.json())
    .then((data) => this.setState({
      lists: data
    }))
  }
  
  componentDidMount() {
    this.getLists()
  }
  
  render() {
    return(<div> </div>)
  }
}

export default ShowListsContainer