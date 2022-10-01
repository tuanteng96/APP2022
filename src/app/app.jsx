import React, { useState, useEffect } from 'react'

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
} from 'framework7-react'

import routes from '../js/routes'
import store from '../js/store'

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Framework7 Parameters
  const f7params = {
    name: 'EZS SPA', // App name
    theme: 'ios', // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    //darkMode: true,
    //autoDarkMode: true
  }

  return (
    <App {...f7params}>
      <View main className="safe-areas" url="/" />
    </App>
  )
}
export default MyApp
