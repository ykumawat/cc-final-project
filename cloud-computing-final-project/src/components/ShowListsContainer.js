import React from 'react'
import { Route, Link } from 'react-router-dom'

class ShowListsContainer extends React.Component {
  
  constructor(){
   super();

   this.state = {
     lists: null
   }
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
    if (this.state.lists) {
     return(
       <div>
        {this.state.lists.map((list) => (
                <li key={list.list}>{list.list}: {list.name}</li>
        ))}
       </div>
     )
    } else {
     return (
       <div>
       <p>You currently have no to-do lists</p>
       </div>
     )
    }
    
  }
}

export default ShowListsContainer