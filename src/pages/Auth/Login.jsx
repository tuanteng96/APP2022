import { Link, Navbar, NavLeft, NavRight, NavTitle, NavTitleLarge, Page, Toolbar } from 'framework7-react'
import React from 'react'
import Navigator from '../../components/Navigator'

function Login({ f7router }) {
  return (
    <Page name="login">
      <Navbar sliding={false}>
        <NavLeft>
          <Link onClick={() => f7router.back()}>Back</Link>
        </NavLeft>
        <NavTitle sliding>EZS SPA</NavTitle>
        <NavRight>
          <Link
            iconIos="f7:menu"
            iconAurora="f7:menu"
            iconMd="material:menu"
            panelOpen="right"
          />
        </NavRight>
      </Navbar>
      <Toolbar bottom>
        <Navigator f7router={f7router} />
      </Toolbar>
      <div>Login</div>
    </Page>
  )
}

export default Login
