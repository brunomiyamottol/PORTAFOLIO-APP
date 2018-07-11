import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavLink, Collapse, NavItem,Button,  Fa, Container, Mask, View } from 'mdbreact';
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
  const view = {background: 'url("")no-repeat center center', backgroundSize: 'cover', height: '100vh'}
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
										<NavItem >
                        <NavLink to="#">EXPERIENCE</NavLink>
										</NavItem>
                    <NavItem >
                    <NavLink to="#">BE-TECHNOLOGY</NavLink>
                    </NavItem>
                    <NavItem >
                    <NavLink to="#">FE-TECHNOLOGY</NavLink>
                    </NavItem>
                    <NavItem >
                    <NavLink to="#">DATA-SCIENCE</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink to="#">MOBILITY</NavLink>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right>
                  <NavItem>
                    <NavLink to="/"><Fa icon="facebook"/></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/"><Fa icon="twitter"/></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/"><Fa icon="instagram"/></NavLink>
                  </NavItem>
                </NavbarNav>
                </Collapse>
              </Navbar>
            <View style={view}>
              <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
                <h2></h2>
                <h5></h5>
                <p></p><br/>
                <p>Continuously develop the passion for learning, understanding and processing information that influences how we perceive and interact with reality.</p>
              </Mask>
            </View>
          </header>
        </div>
    );
  }
}