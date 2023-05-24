import * as Realm from 'realm-web'
import { LoginProps } from '../login/Login'
import RealmApp from '../../shared/realmApp'
import React from 'react'

export const LoginAnonymous = ({ setUser }: LoginProps) => {
  const loginAnonymous = async () => {
    const user: Realm.User = await RealmApp.logIn(Realm.Credentials.anonymous())
    setUser(user)
  }
  return <button onClick={loginAnonymous}>Log In Anonymously</button>
}

export default LoginAnonymous
