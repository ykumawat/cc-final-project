function loginSuccess(user) {
  return {
    type: "LOG_IN_SUCCESS",
    payload: user
  }
}

function signupUser(user) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: user
  }
}

function signOutUser() {
  return {
    type: "LOG_OUT_SUCCESS"
  }
}

function loadedUsers(users) {
  return {
    type: "USERS_LOADED",
    payload: users
  }
}


export function loginUser(email, password) {
  const body = JSON.stringify({email: email, password: password})
  return function(dispatch) {
    fetch("http://localhost:3000/login", {
      method: 'POST',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        localStorage.setItem("userId", user.user.id)
        dispatch(loginSuccess(user))
      }).catch((error) => console.log("LOGIN FAILED", error))
  }

}

export function signupUser(email, password, image, name, zipcode) {
  const body = JSON.stringify({email: email, password: password, profile_image: image, name: name, zipcode: zipcode})
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        dispatch(signupUser(user))
      }).catch((error) => console.log("SIGN UP FAILED", error))
  }

}

export function loadUsers() {
  const jwtToken = localStorage.getItem("jwtToken")
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users`, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer" + jwtToken,
        "Content-Type": 'application/json'
      }
    }).then((res) => res.json())
    .then((json) => {
      const users = json
      dispatch(loadedUsers(users))
    })
  }
}

export function logoutUser(user){
  return function(dispatch) {
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("userId")
    dispatch(signOutUser())
  }
}