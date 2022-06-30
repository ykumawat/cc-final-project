import React from 'react'
import { loadUserPrefs } from '../../services/user'
import MyList from './MyList'
import { deleteSavedLocation } from '../../services/user'

export default class UserProfileContainer extends React.Component {

  state = {
    user: ""
  }

  deleteListItem = (item) => {
    const listItem = {list_item: item.id}
    deleteSavedLocation(listItem)
    this.thisUserPrefs()
    window.location.reload()
  }
  
  thisUserPrefs = () =>{
    const thisUserInfo = loadUserPrefs().then((data) =>{
    this.setState({
      user: data.user.username,
      items: data.prefs.items
      })
    }
    )

  }

  componentDidMount() {
    this.thisUserPrefs()
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