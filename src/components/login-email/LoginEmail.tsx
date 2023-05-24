import React, { useState } from 'react'
import * as Realm from 'realm-web'
import { LoginProps } from '../login/Login'
import RealmApp from '../../shared/realmApp'

const Login = ({ setUser }: LoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {
    const credentials = Realm.Credentials.emailPassword(email, password)
    const user: Realm.User = await RealmApp.logIn(credentials)
    setUser(user)
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={loginUser}>Log In</button>
    </div>
  )
}

export default Login
