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
  
  createNewItem(e){
    e.preventDefault();
    const task = e.target.task.value
    const date = e.target.date.value
    const list_id = e.target.list_id.value
    console.log(task)
    const body = JSON.stringify({"name": task, "due_date": date, "list_id": list_id})
    return fetch("http://localhost:5001/api/items", {
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
      <div>
      <ul class="flex">
        <li class="mr-6">
          <div class="text-indigo-500" >
          <form onSubmit={this.createNewList}>
            <input class="border-2 border-slate-200" type="text" name="list" placeholder="name your list"/>
            <br/>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit"> create a new list </button>
          </form>
        </div>
        <br/>
        <div class="text-indigo-500">
          <form onSubmit={this.createNewList}>
            <input class="border-2 border-slate-200" type="text" name="item" placeholder="add a task"/>
            <br/>
            <input class="border-2 border-slate-200" type="text" name="date" placeholder="add a due date"/>
            <br/>
            <input class="border-2 border-slate-200" type="text" name="list" placeholder="add a list id"/>
            <br/>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit"> create a new item </button>
          </form>
        </div>
      
      </li>
      
      </ul>
      </div>
    )
    
  }
}

export default AddListContainer