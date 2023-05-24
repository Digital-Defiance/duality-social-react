import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RealmApp } from '../../shared/realmApp' // import your Realm App

const ConfirmEmail = () => {
  const location = useLocation()
  const [confirmationStatus, setConfirmationStatus] = useState('')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get('token')
    const tokenId = searchParams.get('tokenId')

    if (!token || !tokenId) {
      setConfirmationStatus('Invalid confirmation link')
      return
    }

    const emailPasswordAuth = RealmApp.emailPasswordAuth
    emailPasswordAuth
      .confirmUser({ token, tokenId })
      .then(() => setConfirmationStatus('Email successfully confirmed!'))
      .catch((err) =>
        setConfirmationStatus(`Failed to confirm email: ${err.message}`),
      )
  }, [location])

  return (
    <div>
      <h1>Email Confirmation</h1>
      {confirmationStatus}
    </div>
  )
}

export default ConfirmEmail
