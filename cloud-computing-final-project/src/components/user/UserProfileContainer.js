import React from 'react'
import { loadUserLists } from '../../services/user'
import MyList from './MyList'
import { deleteListItem } from '../../services/user'

export default class UserProfileContainer extends React.Component {

  state = {
    user: ""
  }

  deleteListItem = (item) => {
    const listItem = {list_item: item.id}
    deleteListItem(listItem)
    this.thisUserPrefs()
    window.location.reload()
  }
  
  thisUserLists = () =>{
    const thisUserInfo = loadUserLists().then((data) =>{
    this.setState({
      user: data.user.username,
      items: data.prefs.items
      })
    }
    )

  }

  componentDidMount() {
    this.thisUserLists()
  }

  render() {
    if (this.state.user !== "") {
      return (
        <div>
          <h2>Welcome {this.state.user}!</h2>
          <MyList locations={this.state} deleteListItem={this.deleteListItem} />
        </div>
      )
    } else {
      return (
        <div>
          null
        </div>
      )
    }
  }

}