import React from "react";
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
} from "framework7-react";
import Navigator from "../components/Navigator";
import store from "../js/store";

const HomePage = ({ f7router }) => {
  //const { Token } = useStore("Auth");
  const { ThemeMode } = useStore("APP");
  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar large sliding={false}>
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
      </Navbar>
      {/* Toolbar */}
      <Toolbar bottom>
        <Navigator f7router={f7router} />
      </Toolbar>
      {/* Page content */}
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
                store.dispatch("setThemeMode", { ThemeMode: "light" })
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
                store.dispatch("setThemeMode", { ThemeMode: "dark" })
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
  );
};
export default HomePage;
