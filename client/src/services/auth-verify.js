import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

function AuthVerify (props) {
  const location = useLocation()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      if (parseJwt(user.accessToken).exp * 1000 < Date.now()) props.logout()
    }
  }, [location])
  return <div />
}

export default AuthVerify
