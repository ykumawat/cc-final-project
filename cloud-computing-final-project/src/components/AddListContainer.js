import React from 'react'

class AddListContainer extends React.Component {
  
  createNewList(e){
    e.preventDefault();
    const listName = e.target.list.value
    console.log(listName)
    const body = JSON.stringify({"name": listName})
    return fetch("http://localhost:5001/api/lists", {
      method: 'post',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
    console.log("button clicked")
  }
  
  render() {
    return(
      <ul class="flex">
        <li class="mr-6">
          <div class="text-indigo-500 text-2xl hover:text-blue-800" >
          <form onSubmit={this.createNewList}>
            <input borderColor = "black" type="text" name="list" defaultValue="name your list"/>
            <button type="submit"> create a new list </button>
          </form>
          </div>
        </li>
      
      </ul>
      // <div class= "grid grid-rows-3 grid-flow-col gap-4 ">
      //       
      //     </div>
    )
    
  }
}

export default AddListContainer