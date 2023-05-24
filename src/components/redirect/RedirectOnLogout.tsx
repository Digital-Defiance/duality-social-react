import * as Realm from 'realm-web'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// New component
const RedirectOnLogout = ({ user }: { user: Realm.User | null }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return null
}

export default RedirectOnLogout
