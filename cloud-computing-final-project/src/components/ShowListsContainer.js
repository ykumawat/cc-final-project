import React from 'react'
import { Route, Link } from 'react-router-dom'

class ShowListsContainer extends React.Component {
  
  constructor(){
   super();

   this.state = {
     lists: null,
     items: null
   }
 }
  
  getLists = async () =>{
    await fetch('http://localhost:5001/api/lists')
    .then((resp)=>resp.json())
    .then((data) => this.setState({
      lists: data
    }))
  }
  
  expandList = async (list_id) =>{
    await fetch(`http://localhost:5001/api/items?list_id=${list_id}`)
    .then((resp)=>resp.json())
    .then((data) => this.setState({
      items: data
    }))
  }
  
  componentDidMount() {
    this.getLists()
  }
  
  render() {
    if (this.state.lists) {
     return(
       <div class="text-indigo-600">
       Your active lists:
       <br/>
        {this.state.lists.map((list) => (
                // 
                <div>
                <p>{list.list}: {list.name}</p> 
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> delete list </button>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> add item to list </button>
                </div>
                // </button>
                
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