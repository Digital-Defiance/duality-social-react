import React from 'react'
import LoginAnonymous from '../login-anonymous/LoginAnonymous'
import LoginEmail from '../login-email/LoginEmail'
import LogOut from '../logout/Logout'

export type LoginProps = {
  setUser: (user: Realm.User) => void
}

const Login = ({ setUser }: LoginProps) => {
  return (
    <div>
      <h2>Log in to continue</h2>

      <div className="row">
        <LoginEmail setUser={setUser} />
      </div>
      <div className="row">
        <LoginAnonymous setUser={setUser} />
        <LogOut />
      </div>
    </div>
  )
}

export default Login
