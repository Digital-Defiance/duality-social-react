import RealmApp from '../../shared/realmApp'
import React from 'react'

const LogOut = () => {
  const logoutUser = () => {
    localStorage.removeItem('token')
    RealmApp.currentUser?.logOut()
    window.location.reload()
  }
  return <button onClick={logoutUser}>Log Out</button>
}

export default LogOut
