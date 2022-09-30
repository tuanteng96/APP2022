import { Link } from 'framework7-react'
import React, { useEffect, useState } from 'react'

function Navigator({ f7router }) {
  const [routerUrl, setRouterUrl] = useState('')

  useEffect(() => {
    setRouterUrl(f7router.url)
  }, [f7router.url])

  return (
    <div style={{ display: 'flex' }}>
      <Link style={{ color: routerUrl == "/" && "red" }} href="/">Home</Link>
      <Link style={{ color: routerUrl == "/login" && "red" }} href="/login">Login</Link>
    </div>
  )
}

export default Navigator
