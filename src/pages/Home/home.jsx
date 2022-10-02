import React, { useEffect } from 'react'
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  useStore,
  f7,
  Input,
} from 'framework7-react'
import Navigator from '../../components/Navigator'
import store from '../../js/store'
import { AppHelpers } from '../../helpers'
import Image1 from '../../assets/images/anh-1.jpeg'
import Dom7 from 'dom7'
import bgHeaderTop from '../../assets/images/bg-header-home.png'

const HomePage = ({ f7router }) => {
  //const { Token } = useStore("Auth");
  const { ThemeMode } = useStore('APP')

  useEffect(() => {
    const $ = Dom7
    $('.page-content').scroll(function () {
      if ($(this).scrollTop() > 0) {
        AppHelpers.PromHelpers.STATUS_BAR_COLOR()
        $('.elm-header').addClass('scroll-active')
      } else {
        AppHelpers.PromHelpers.STATUS_BAR_COLOR('light')
        $('.elm-header').removeClass('scroll-active')
      }
    }, [])
  })

  return (
    <Page
      className="page-home"
      name="home"
      onPageBeforeIn={() => AppHelpers.PromHelpers.STATUS_BAR_COLOR('light')}
      onPageBeforeOut={() => AppHelpers.PromHelpers.STATUS_BAR_COLOR('light')}
      noNavbar
    >
      {/* Top Navbar */}
      {/* <Navbar large sliding={false}>
        <NavLeft>
          <Link
            iconIos="f7:menu"
            iconAurora="f7:menu"
            iconMd="material:menu"
            panelOpen="left"
          />
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
        <NavTitleLarge>EZS SPA</NavTitleLarge>
      </Navbar> */}
      {/* Toolbar */}
      <Toolbar bottom>
        <Navigator f7router={f7router} />
      </Toolbar>
      {/* Page content */}
      <div className="page-home__header elm-header">
        <div className="px-12px py-8px">
          <div className="d--f jc--sb ai--c top">
            <div className="form-search">
              <i class="fa-regular fa-magnifying-glass"></i>
              <Input
                type="text"
                placeholder="Bạn tìm gì hôm nay ?"
                clearButton
              />
            </div>
            <div className="d--f icons">
              <div className="w-35px h-30px d--f ai--c jc--c fz-18px">
                <i className="fa-regular fa-bell"></i>
              </div>
              <div className="w-35px h-30px d--f ai--c jc--c fz-18px">
                <i className="fa-regular fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-home__slider">
        <img
          className="w-100 d-block"
          src={Image1}
          alt=""
        />
      </div>
      <Block strong>
        <p>Here is your blank Framework7 app. Let's see what we have here.</p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem link="/login/" title="About" />
        <ListItem link="/form/" title="Form" />
      </List>

      <BlockTitle>Modals</BlockTitle>
      <Block strong>
        <Row>
          <Col width="50">
            <Button fill raised popupOpen="#my-popup">
              Popup
            </Button>
          </Col>
          <Col width="50">
            <Button fill raised loginScreenOpen="#my-login-screen">
              Login Screen
            </Button>
          </Col>
        </Row>
      </Block>

      <BlockTitle>Panels</BlockTitle>
      <Block strong>
        <Row>
          <Col width="50">
            <Button
              fill
              raised
              onClick={() =>
                store.dispatch('setThemeMode', { ThemeMode: 'light' })
              }
            >
              Light
            </Button>
          </Col>
          <Col width="50">
            <Button
              fill
              raised
              onClick={() =>
                store.dispatch('setThemeMode', { ThemeMode: 'dark' })
              }
            >
              Dark
            </Button>
          </Col>
        </Row>
      </Block>

      <List>
        <ListItem
          title="Dynamic (Component) Route"
          link="/dynamic-route/blog/45/post/125/?foo=bar#about"
        />
        <ListItem
          title="Default Route (404)"
          link="/load-something-that-doesnt-exist/"
        />
        <ListItem
          title="Request Data & Load"
          link="/request-and-load/user/123456/"
        />
      </List>
    </Page>
  )
}
export default HomePage
