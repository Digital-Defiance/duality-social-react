import React, { useState } from 'react'
import RealmApp from '../../shared/realmApp'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async () => {
    try {
      await RealmApp.emailPasswordAuth.registerUser({
        email,
        password,
      })
      alert('Successfully registered. You can now login.')
    } catch (error) {
      const e = error as Error
      alert('Error during registration: ' + e.message)
    }
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
      <button onClick={registerUser}>Register</button>
    </div>
  )
}

export default Register
