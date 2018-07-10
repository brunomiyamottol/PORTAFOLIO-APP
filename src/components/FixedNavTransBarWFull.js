import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavLink, Collapse, NavItem, Fa, Container, Mask, View } from 'mdbreact';
import '../styles/styles.scss'; 

export default class FixedNavTransBarWFull extends Component  {
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
  const view = {background: 'url("https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg")no-repeat center center', backgroundSize: 'cover', height: '100vh'}
  return (
        <div>
          <header>
              <Navbar color="" dark expand="md" fixed="top" scrolling>
                <NavbarBrand href="/">
                    <strong>MIYAMOTTO.NET</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                  <NavbarNav left>
                    <NavItem active>
                        <NavLink to="/">HOME</NavLink>
                    </NavItem>
                    <NavItem>
												<NavLink className="nav-link" to="/resume">RESUME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about">ABOUT</NavLink>
										</NavItem>
										<NavItem active>
                        <NavLink to="/portafolio">PORTAFOLIO</NavLink>
										</NavItem>
										<NavItem active>
                        <NavLink to="/blog">BLOG</NavLink>
										</NavItem>
										<NavItem active>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Navbar>
            <View style={view}>
              <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
                <h2>This Navbar is fixed</h2>
                <h5>It will always stay visible on the top, even when you scroll down</h5>
                <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br/>
                <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
              </Mask>
            </View>
          </header>
        </div>
    );
  }
}

{
	/*
					<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/resume">RESUME</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">ABOUT</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/portafolio">PORTAFOLIO</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/blog">BLOG</a>
					</li>
					<li className="nav-item">
					<a className="nav-link " href="/press">PRESS</a>
					</li>
					<li className="nav-item">
					<a className="nav-link " href="/contact">CONTACT</a>
					</li>
				</ul>
	*/
}