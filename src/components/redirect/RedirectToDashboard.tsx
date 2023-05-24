import * as Realm from 'realm-web'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const redirectPaths = ['/', '/login', '/register', '/confirmEmail']

// New component
const RedirectToDashboard = ({ user }: { user: Realm.User | null }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (user && redirectPaths.includes(location.pathname)) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return null
}

export default RedirectToDashboard
