import * as Realm from 'realm-web'
import React from 'react'

const UserDetail = ({ user }: { user: Realm.User }) => {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  )
}

export default UserDetail
