import * as Realm from 'realm-web'
import React, { Component, Suspense, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { CSpinner } from '@coreui/react-pro'
import LogOut from './components/logout/Logout'
import RedirectOnLogout from './components/redirect/RedirectOnLogout'
import RealmApp from './shared/realmApp'

import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const App = () => {
  const [user, setUser] = useState<Realm.User | null>(RealmApp.currentUser)
  return (
    <HashRouter>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
        {user && <LogOut />}
        <RedirectOnLogout user={user} />
      </Suspense>
    </HashRouter>
  )
}

export default App
