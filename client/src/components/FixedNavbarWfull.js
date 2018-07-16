import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, MRow, Col, View, Mask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

export default class  FullPageIntroWithNonFixedNavbar extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
    collapse: !this.state.collapse,
  });
}
render() {
const view = {background: 'url("https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg")no-repeat center center', backgroundSize: 'cover', height: '100vh'}
return (
    <div>
      <header>
        <Router>
          <Navbar color="black" dark expand="md" scrolling>
            <NavbarBrand href="/">
                <strong>Navbar</strong>
            </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem active>
                  <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
									<NavLink to="/resume">RESUME</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/about">ABOUT</NavLink>
							</NavItem>
							<NavItem>
									<NavLink to="/portafolio">PORTAFOLO</NavLink>
							</NavItem>
							<NavItem>
									<NavLink to="/blog">BLOG</NavLink>
							</NavItem>
							<NavItem>
									<NavLink to="/contact">CONTACT</NavLink>
							</NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>

      <View style={view}>
        <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
          <h2>This Navbar isn't fixed</h2>
          <h5>When you scroll down it will disappear</h5>
          <br/>
          <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
        </Mask>
      </View>
    </header>
    <main>
      <Container className="text-center my-5">
        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.</p>
      </Container>
    </main>
  </div>
);
}
}
